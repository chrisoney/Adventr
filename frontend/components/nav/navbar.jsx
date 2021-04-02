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
    this.getWindowDimensions();
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
    // if ((this.props.location.pathname != '/login') &&
    //   (this.props.location.pathname != '/signup') &&
    //   (this.props.location.pathname != '/')) {
    //   }
    if (this.props.currentUser && 
        (this.props.location.pathname != '/login') &&
        (this.props.location.pathname != '/signup') &&
        (this.props.location.pathname != '/')) {
        navbarBorder = (<div className="nav-border"></div>);
      if (this.state.windowSize <= 980) {
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
              <Link to="/dashboard" className="nav-link">
                <span
                  className={`fas fa-home ${
                    this.props.location.pathname === '/dashboard'
                      ? 'active'
                      : ''
                  }`}
                  title="Dashboard"
                ></span>
              </Link>
              <Link to="/explore" className="nav-link">
                <span
                  className={`fas fa-compass ${
                    this.props.location.pathname === '/explore' ? 'active' : ''
                  }`}
                  title="Explore"
                ></span>
              </Link>
              {/* // No messages yet
              <Link to="/messages" className="nav-link">
              <span className="fas fa-scroll" title="Messages"></span>
              </Link> */}
              {/* // No livechat yet
              <span className="fas fa-comment" title="Chat"></span> */}
              <Link to="/about" className="nav-link">
                <span
                  className={`fas fa-question-circle ${
                    this.props.location.pathname === '/about' ? 'active' : ''
                  }`}
                ></span>
              </Link>
              {/* // No user dropdown yet
              <span className="fas fa-user"></span> */}
              {
              
                // No create-new modal yet
                  /* <div
                className="create-new-container"
                // onClick={(e) => this.userMenuToggle(e)}
              >
                <span className="fas fa-feather-alt"></span>
              </div> */
              
              }
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