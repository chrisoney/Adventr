import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/session_actions'
import { closeModal } from '../../actions/modal_actions';
import { Link } from 'react-router-dom';

class UserMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state = { currentUser: this.props.currentUser,
                      imageUrls: null,
                      imageFiles: null, };
        this.reference = React.createRef();

        this.logoutUser = this.logoutUser.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    logoutUser() {
      this.props.logout();
      this.props.closeModal();
    }

    handleUpload(e) {
      let that = this;
      let fileArr = [];
      let urlArr = [];
      
      if (this.state.imageFiles !== null){
        fileArr = fileArr.concat(this.state.imageFiles);
        let imageUrlArr = urlArr.concat(this.state.imageUrls);
      }
      
      let uploadedImages = e.currentTarget.files;
      
      for (let i = 0; i < uploadedImages.length; i++){
        let file = uploadedImages[i];
        let fileReader = new FileReader();
    
        fileReader.onloadend = () => {
          fileArr = fileArr.concat(file);
          urlArr = urlArr.concat(fileReader.result);
          that.setState({
            imageFiles: fileArr,
            imageUrls: urlArr
          })
        }
        if (file) fileReader.readAsDataURL(file);
      }
  
    }

    render() {
      const { currentUser, closeModal } = this.props;
      return (
        <>
          <div className="user-menu-top">
              <label className="user-menu-avatar">
                <img src={currentUser.avatar}/>
                <input
                  type="file"
                  accept="image/*"
                  id="upload-box"
                  onChange={this.handleUpload}
                />
              </label>
              <div className="user-menu-username">{currentUser.username}</div>
          </div>
          <div className="user-menu-top-buttons">
            <div className="menu-container">
              <span className="fas fa-sign-out-alt"></span>
              <button
                className="link"
                onClick={this.logoutUser}
              >Logout</button>
            </div>
            <div className="menu-container" onClick={closeModal}>
              <span className="fas fa-home"></span>
              <Link to='/dashboard' className="link">Dashboard</Link>
            </div>
            <div className="menu-container" onClick={closeModal}>
              <span className="fas fa-compass"></span>
              <Link to='/explore' className="link">Explore</Link>
            </div>
            <div className="menu-container" onClick={closeModal}>
              <span className="fas fa-heart"></span>
              <Link to='/likes' className="link">Likes</Link>
            </div>
            <div className="menu-container" onClick={closeModal}>
              <span className="fas fa-question-circle"></span>
              <Link to='/about' className="link">About</Link>
            </div>
          </div>
        </>
      )
    }
}

const mapStateToProps = (state, ownProps) => {
    let currentUser = state.session.currentUser;
    return {
    currentUser: currentUser,
    }
}

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    closeModal: () => dispatch(closeModal()),
})
    



export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);