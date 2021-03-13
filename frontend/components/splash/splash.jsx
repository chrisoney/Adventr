import React from "react";
import { Link } from "react-router-dom";

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      scrollPosition: 0
    }
  }

  handleScroll(e, id) {
    console.log($('#' + id).offset().top + this.state.scrollPosition)
    const circles = document.getElementsByClassName('fa-circle');
    for (let i = 0; i < circles.length; i++) {
      const circle = circles[i];
      circle.classList.remove('fas');
      circle.classList.add('far');
    }
    e.target.classList.remove('far');
    e.target.classList.add('fas');
    $('.splash-container').animate(
      {
        scrollTop:
         
          $('#' + id).offset().top + this.state.scrollPosition
      },
      500
    );
    this.setState({ scrollPosition: this.state.scrollPosition + $('#' + id).offset().top})
  }
  
  render() {
    return (
      <div className="splash-container">
        <div className="sidebar">
          <span
            className="fas fa-circle"
            onClick={(e) => this.handleScroll(e, 'splash-1')}
          ></span>
          <span
            className="far fa-circle"
            onClick={(e) => this.handleScroll(e, 'splash-2')}
          ></span>
          <span
            className="far fa-circle"
            onClick={(e) => this.handleScroll(e, 'splash-3')}
          ></span>
          <span
            className="far fa-circle"
            onClick={(e) => this.handleScroll(e, 'splash-4')}
          ></span>
          <span
            className="far fa-circle"
            onClick={(e) => this.handleScroll(e, 'splash-5')}
          ></span>
          <span
            className="far fa-circle"
            onClick={(e) => this.handleScroll(e, 'splash-6')}
          ></span>
        </div>
        <div className="splash" id="splash-1">
          <div className="splash-content">
            <p className="app-name">adventr</p>
            <div className="welcome-text">
              <p>Come for the adventures.</p>
              <p>Stay for the magic items.</p>
            </div>
            <Link to="/signup">
              <button className="signup">Get Started</button>
            </Link>
            <Link to="/login">
              <button className="login">Login</button>
            </Link>
          </div>
          <div className="bottom-section">
            <div className="bottom-text">What is Adventr?</div>
          </div>
        </div>
        <div className="splash" id="splash-2"></div>
        <div className="splash" id="splash-3"></div>
        <div className="splash" id="splash-4"></div>
        <div className="splash" id="splash-5"></div>
        <div className="splash" id="splash-6"></div>
      </div>
    );
  }
}

export default Splash;
