import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/session_actions'
import { closeModal } from '../../actions/modal_actions';

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
          <button
            className="logout-button"
            onClick={this.logoutUser}
          >Logout</button>
          <button
            className="quest-create-button"
          >Create A Quest</button>
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