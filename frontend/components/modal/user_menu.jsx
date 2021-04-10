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
                src={currentUser.avatarUrl || currentUser.avatar}
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
              <button className="link" onClick={this.logoutUser}>
                <span className="fas fa-sign-out-alt"></span>
                <span>Logout</span>
              </button>
            </div>
            <div className="menu-container" onClick={closeModal}>
              <Link to="/dashboard" className="link">
                <span className="fas fa-home"></span>
                <span>Dashboard</span>
              </Link>
            </div>
            <div className="menu-container" onClick={closeModal}>
              <Link to="/explore" className="link">
                <span className="fas fa-compass"></span>
                <span>Explore</span>
              </Link>
            </div>
            <div className="menu-container" onClick={closeModal}>
              <Link to="/likes" className="link">
                <span className="fas fa-heart"></span>
                <span>Likes</span>
              </Link>
            </div>
            <div className="menu-container" onClick={closeModal}>
              <Link to="/follows" className="link">
                <span className="fas fa-user-friends"></span>
                <span>Follows</span>
              </Link>
            </div>
            <div className="menu-container" onClick={closeModal}>
              <Link to="/settings" className="link">
                <span className="fas fa-cogs"></span>
                <span>Settings</span>
              </Link>
            </div>
            <div className="menu-container" onClick={closeModal}>
              <Link to="/about" className="link">
                <span className="fas fa-question-circle"></span>
                <span>About</span>
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