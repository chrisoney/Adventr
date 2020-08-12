import React from 'react';
import { Link } from 'react-router-dom';
import NavbarDropdown from './navbar_dropdown';
import { openModal } from '../../actions/modal_actions';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    let navbar = (<></>);
    let otherButton = (<></>);
    let loginNav = (<></>);
    let navbarBorder = (<div></div>);
    if (this.props.location.pathname === '/'){
      navbar = (
        <div className="navbar-container">
          <div className="left-side">
            <Link to='/dashboard' className="link"><span className="nav-logo">a</span></Link>
          </div>
          <div className="right-side">
          </div>
        </div>
      )
    }

    if (this.props.location.pathname === '/signup') {
      navbar = (
        <div className="navbar-container">
          <div className="left-side">
            <Link to='/dashboard' className="link"><span className="nav-logo">a</span></Link>
          </div>
          <div className="right-side">
            <Link to="/login" className="other-button"><button>Login</button></Link>
          </div>
        </div>
      )
    }
    if (this.props.location.pathname === '/login') {
      navbar = (
        <div className="navbar-container">
          <div className="left-side">
            <Link to='/dashboard' className="link"><span className="nav-logo">a</span></Link>
          </div>
          <div className="right-side">
            <Link to="/signup" className="other-button"><button>Signup</button></Link>
          </div>
        </div>
      )
    }
    if ((this.props.location.pathname != '/login') &&
      (this.props.location.pathname != '/signup') &&
      (this.props.location.pathname != '/')) {
      navbarBorder = (<div className="nav-border"></div>);
    }
    if (this.props.currentUser) {
      navbar = (
        <div className="navbar-container">
          <div className="left-side">
          <button 
            className="user-menu-button fas fa-bars"
            onClick={() => this.props.openModal("usermenu")}
          ></button>
          </div>
          <div className="middle">
            <Link to='/dashboard' className="link"><span className="nav-logo">a</span></Link>
          </div>
          <div className="right-side">
            <Link to='/about' className="link"><span className="fas fa-question-circle"></span></Link>
          </div>
        </div>
      )
    }
    return (
      <div className="navbar">
        {navbarBorder}
        {navbar}
        {otherButton}
        {loginNav}
      </div>
    );
  }
}


export default Navbar;