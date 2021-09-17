import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import { openModal2, closeModal2 } from '../../actions/modal_actions';
import { fetchAllLikes } from '../../actions/like_actions';
import { fetchAllFollows } from '../../actions/follow_actions';

class UserDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.logoutActions = this.logoutActions.bind(this);
    this.handleDeleteUser = this.handleDeleteUser.bind(this)
  }

  logoutActions(e) {
    e.stopPropagation();
    this.props.logout();
    this.props.closeModal2();
  }

  handleDeleteUser(e) {
    e.preventDefault();
    if (this.props.currentUser.id > 10) console.log(this.props.currentUser.id)
    else console.log('goodbye')
  }

  render() {
    const { currentUser } = this.props;
    let disabled = false;
    if (currentUser.id <= 10) disabled = true;
    return (
      <>
        <div className="user-dropdown-header">
          <div className="header-title">Account</div>
          <div className="header-button" onClick={(e) => this.logoutActions(e)}>
            Log out
          </div>
        </div>
        <div className="user-dropdown-top-section">
          <Link to="/likes" className="panel-container count-container">
            <div className="panel-left">
              <span className="fas fa-heart user-dropdown-icon"></span>
              <span className="panel-text">Likes</span>
            </div>
            <div className="panel-count">{this.props.likes}</div>
          </Link>
          <Link to='/follows' className="panel-container count-container">
            <div className="panel-left">
              <span className="fas fa-user-friends user-dropdown-icon"></span>
              <span className="panel-text">Following</span>
            </div>
            <div className="panel-count">{this.props.followings}</div>
          </Link>
          <Link to='/settings' className="panel-container">
            <span className="fas fa-cogs user-dropdown-icon"></span>
            <span className="panel-text">Settings</span>
          </Link>
        </div>
        <div className="user-dropdown-header">
          <div className="header-title">Guild</div>
          <div
            className={`header-button delete-user ${currentUser.id <= 10 ? 'locked' : ''}`}
            disabled={disabled}
            onClick={this.handleDeleteUser}
          >
            Delete
          </div>
        </div>
        <div className="user-dropdown-bottom-section"></div>
        <div className="user-dropdown-footer"></div>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let currentUser = state.session.currentUser;
  const likes = Object.values(state.entities.likes)
    .filter(like => like.user_id === currentUser.id)
    .length;
  const followings = Object.values(state.entities.follows)
    .filter(follow => follow.follower_id === currentUser.id)
    .length;
  return {
    currentUser: currentUser,
    likes,
    followings: followings,
  };
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal2: () => dispatch(openModal2()),
  closeModal2: () => dispatch(closeModal2()),
  fetchAllLikes: () => dispatch(fetchAllLikes()),
  fetchAllFollows: () => dispatch(fetchAllFollows())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDropdown);
