import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal2, closeModal2 } from '../../actions/modal_actions';
import { Link } from 'react-router-dom';

class UserDropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="user-dropdown-header">
          <div className="header-title">Account</div>
          <div className="header-logout" onClick={this.props.logout}>
            Log out
          </div>
        </div>
        <div className="user-dropdown-top-section">
          <div className="like-panel">
            <div className="panel-left">
              <span className="fas fa-heart user-dropdown-icon"></span>
              <span className="panel-text">Likes</span>
            </div>
            <div className="panel-count"></div>
          </div>
          <div className="follow-panel">
            <div className="panel-left">
              <span className="fas fa-user-friends user-dropdown-icon"></span>
              <span className="panel-text">Following</span>
            </div>
            <div className="panel-count"></div>
          </div>
          <div className="settings-panel">
            <span className="fas fa-cogs user-dropdown-icon"></span>
            <span className="panel-text">Settings</span>
          </div>
        </div>
        <div className="user-dropdown-middle-header">
          <div className="header-title">Guild</div>
          <div className="header-logout">Delete</div>
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
    likes: currentUser.likes,
    follows: currentUser.follows,
  };
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal2: () => dispatch(openModal2()),
  closeModal2: () => dispatch(closeModal2()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDropdown);
