import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/session_actions'
import { closeModal } from '../../actions/modal_actions';
import { Link } from 'react-router-dom';

class UserMenu extends React.Component{
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
    }

    logoutUser() {
      this.props.logout();
      this.props.closeModal();
    }

    render() {
      const { currentUser } = this.props;
      return (
        <>
          <div className="user-menu-top">
              <img src={currentUser.avatar}/>
              <div className="user-menu-username">{currentUser.username}</div>
          </div>
          <div className="user-menu-top-buttons">
            <button
              className="logout-button"
              onClick={this.logoutUser}
            >Logout</button>
            <button
              className="quest-create-button"
            >Create A Quest</button>
            <Link to='/dashboard' className="link">Dashboard</Link>
            <Link to='/explore' className="link">Explore</Link>
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