import React from "react";
import { Link } from "react-router-dom";

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.myRef = React.createRef();
    this.state = {
      scrollTop: 0,
      scrollPosition: 0,
      scrollPosArr: [
        0,
        595.2000122070312,
        1190.4000244140625,
        1785.5999755859375,
        2380.800048828125,
        2976,,
      ],
    };
  }
  onScroll() {
    setTimeout(() => {
      const circles = document.getElementsByClassName('fa-circle');
      for (let i = 0; i < circles.length; i++) {
        if (this.state.scrollPosArr[i] === this.state.scrollTop) {
          circles[i].classList.remove('far');
          circles[i].classList.add('fas');
        } else {
          circles[i].classList.remove('fas');
          circles[i].classList.add('far');
        }
      }
      const scrollTop = this.myRef.current.scrollTop;
      console.log(`myRef.scrollTop: ${scrollTop}`);
      this.setState({
        scrollTop: scrollTop,
      });
    }, 300);
  }

  handleScroll(e, id) {
    console.log($('#' + id).offset().top);
    // const circles = document.getElementsByClassName('fa-circle');
    // for (let i = 0; i < circles.length; i++) {
    //   const circle = circles[i];
    //   circle.classList.remove('fas');
    //   circle.classList.add('far');
    // }
    // e.target.classList.remove('far');
    // e.target.classList.add('fas');
    $('.splash-container').animate(
      {
        scrollTop: $('#' + id).offset().top + this.state.scrollTop,
      },
      500
    );
    this.setState({
      scrollTop: this.state.scrollTop + $('#' + id).offset().top,
    });
  }

  render() {
    return (
      <div
        className="splash-container"
        ref={this.myRef}
        onScroll={this.onScroll}
      >
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
