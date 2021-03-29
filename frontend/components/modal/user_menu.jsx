import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions';
import { Link } from 'react-router-dom';

class UserMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state = { currentUser: this.props.currentUser,
                      imageUrl: null,
                      imageFile: null, };
        this.reference = React.createRef();

        this.logoutUser = this.logoutUser.bind(this);
        // this.handleUpload = this.handleUpload.bind(this);
    }

    logoutUser() {
      this.props.logout();
      this.props.closeModal();
    }

    

    render() {
      const { currentUser, closeModal, openModal2 } = this.props;
      return (
        <>
          <div className="user-menu-top">
            <label className="user-menu-avatar">
              <img
                src={currentUser.avatar}
                // onClick={() => {
                //   closeModal();
                //   openModal2('avatar');
                // }}
              />
            </label>
            <div className="user-menu-username">{currentUser.username}</div>
          </div>
          <div className="user-menu-top-buttons">
            <div className="menu-container">
              <span className="fas fa-sign-out-alt"></span>
              <button className="link" onClick={this.logoutUser}>
                Logout
              </button>
            </div>
            <div className="menu-container" onClick={closeModal}>
              <span className="fas fa-home"></span>
              <Link to="/dashboard" className="link">
                Dashboard
              </Link>
            </div>
            <div className="menu-container" onClick={closeModal}>
              <span className="fas fa-compass"></span>
              <Link to="/explore" className="link">
                Explore
              </Link>
            </div>
            <div className="menu-container" onClick={closeModal}>
              <span className="fas fa-heart"></span>
              <Link to="/likes" className="link">
                Likes
              </Link>
            </div>
            <div className="menu-container" onClick={closeModal}>
              <span className="fas fa-question-circle"></span>
              <Link to="/about" className="link">
                About
              </Link>
            </div>
          </div>
        </>
      );
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
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal()),
})
    



export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);