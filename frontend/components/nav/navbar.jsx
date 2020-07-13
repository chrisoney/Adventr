import React from 'react';
import { Link } from 'react-router-dom';
import NavbarDropdown from './navbar_dropdown';

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
            <NavbarDropdown logout={this.props.logout}/>
          </div>
          <div className="middle">
            <Link to='/dashboard' className="link"><span className="nav-logo">a</span></Link>
          </div>
          <div className="right-side">
            <img className="search-icon" src="https://mastery.s3-us-west-1.amazonaws.com/magnifying-glass.png" />
          </div>
        </div>
      )
    }
    return (
      <div className="navbar">
        {navbarBorder}
        {/* <div className="left-side">
          <Link to='/dashboard' className="link"><span className="nav-logo">a</span></Link>
        </div> */}
        {navbar}
        {otherButton}
        {loginNav}
      </div>
    );
  }
}


export default Navbar;