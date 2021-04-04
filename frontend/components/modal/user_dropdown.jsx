import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal2, closeModal2 } from '../../actions/modal_actions';

class UserDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.logutActions = this.logoutActions.bind(this);
  }

  logoutActions(e) {
    e.stopPropagation();
    this.props.logout();
    this.props.closeModal2();
  }

  render() {
    return (
      <>
        <div className="user-dropdown-header">
          <div className="header-title">Account</div>
          <div className="header-button" onClick={(e) => this.logoutActions(e)}>
            Log out
          </div>
        </div>
        <div className="user-dropdown-top-section">
          <div className="panel-container count-container">
            <div className="panel-left">
              <span className="fas fa-heart user-dropdown-icon"></span>
              <span className="panel-text">Likes</span>
            </div>
            <div className="panel-count">{this.props.likes}</div>
          </div>
          <div className="panel-container count-container">
            <div className="panel-left">
              <span className="fas fa-user-friends user-dropdown-icon"></span>
              <span className="panel-text">Following</span>
            </div>
            <div className="panel-count">{this.props.followings}</div>
          </div>
          <div className="panel-container">
            <span className="fas fa-cogs user-dropdown-icon"></span>
            <span className="panel-text">Settings</span>
          </div>
        </div>
        <div className="user-dropdown-header">
          <div className="header-title">Guild</div>
          <div className="header-button">Delete</div>
        </div>
        <div className="user-dropdown-bottom-section"></div>
        <div className="user-dropdown-footer"></div>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let currentUser = state.session.currentUser;
  return {
    currentUser: currentUser,
    likes: currentUser.likedQuests.length,
    followings: currentUser.followed_users.length,
  };
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal2: () => dispatch(openModal2()),
  closeModal2: () => dispatch(closeModal2()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDropdown);
