import React from 'react';
import { Link } from 'react-router-dom';
// import NavbarDropdown from './navbar_dropdown';
// import { openModal } from '../../actions/modal_actions';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowSize: 0,
    }
    this.userMenuToggle = this.userMenuToggle.bind(this);
    this.getWindowDimensions = this.getWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    window.addEventListener('resize', this.getWindowDimensions)
  }

  getWindowDimensions() {
    const { innerWidth } = window;
    this.setState({ windowSize: innerWidth })
  }

  userMenuToggle(e) {
    e.preventDefault();
    document.querySelector('.user-menu-button').classList.toggle('menu-open');
    if (this.props.isModalOpen) {
      document.querySelector('.user-menu-container').classList.add('closing');
      setTimeout(() => {
        this.props.closeModal();
      }, 450);
    }
    else {
      this.props.openModal('usermenu')
    }
  }


  render() {
    let navbar = (<></>);
    let otherButton = (<></>);
    let loginNav = (<></>);
    let navbarBorder = (<div></div>);
    if (this.props.location.pathname === '/'){
      navbar = (
        <div className="navbar-container splash-nav">
          <div className="left-side">
            <Link to="/dashboard" className="link">
              <span className="nav-logo">a</span>
            </Link>
          </div>
          <div className="right-side"></div>
        </div>
      );
    }

    if (this.props.location.pathname === '/signup') {
      navbar = (
        <div className="navbar-container splash-nav">
          <div className="left-side">
            <Link to="/dashboard" className="link">
              <span className="nav-logo">a</span>
            </Link>
          </div>
          <div className="right-side">
            <Link to="/login" className="other-button">
              <button>Login</button>
            </Link>
          </div>
        </div>
      );
    }
    if (this.props.location.pathname === '/login') {
      navbar = (
        <div className="navbar-container splash-nav">
          <div className="left-side">
            <Link to="/dashboard" className="link">
              <span className="nav-logo">a</span>
            </Link>
          </div>
          <div className="right-side">
            <Link to="/signup" className="other-button">
              <button>Signup</button>
            </Link>
          </div>
        </div>
      );
    }
    if ((this.props.location.pathname != '/login') &&
      (this.props.location.pathname != '/signup') &&
      (this.props.location.pathname != '/')) {
      navbarBorder = (<div className="nav-border"></div>);
    }
    if (this.props.currentUser) {
      if (this.state.windowSize <= 800) {
        navbar = (
          <div className="navbar-container">
            <div className="left-side">
              <div
                className="user-menu-button"
                onClick={(e) => this.userMenuToggle(e)}
                // onClick={() => this.props.openModal('usermenu')}
              >
                <span className="user-menu-bar"></span>
                <span className="user-menu-bar"></span>
                <span className="user-menu-bar"></span>
              </div>
            </div>
            <div className="middle">
              <Link to="/dashboard" className="link">
                <span className="nav-logo">a</span>
              </Link>
            </div>
            <div className="right-side">
              <Link to="/about" className="link">
                <span className="fas fa-question-circle"></span>
              </Link>
            </div>
          </div>
        );
      } else {
        navbar = (
          <div className="navbar-container">
            <div className="left-side">
              <Link to="/dashboard" className="link">
                <span className="nav-logo">a</span>
              </Link>
              {/* Search bar */}
            </div>

            <div className="right-side">
              {/* Home button */}
              {/* Explore button */}
              {/* Message button */}
              {/* Chat button */}
              <Link to="/about" className="link">
                <span className="fas fa-question-circle"></span>
              </Link>
              {/* User dropdown button */}
              {/* Create modal */}
            </div>
          </div>
        );
      }
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