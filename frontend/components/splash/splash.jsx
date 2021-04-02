import React from 'react';
// import Splash1 from './slides/splash1';
import { Link } from 'react-router-dom';
import Splash2 from './slides/splash2/splash2';
import Splash3 from './slides/splash3';
import Splash4 from './slides/splash4';
import Splash5 from './slides/splash5';
import Splash6 from './slides/splash6';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.myRef = React.createRef();
    this.state = {
      scrollTop: 0,
    };
  }

  onScroll() {
    setTimeout(() => {
      const circles = document.getElementsByClassName('fa-circle');
      for (let i = 0; i < circles.length; i++) {
        if (
          $(`#splash-${i + 1}`).offset().top === 0
        ) {
          circles[i].classList.remove('far');
          circles[i].classList.add('fas');
          document.querySelector(`#splash-${i + 1}`).classList.add('active');
        } else {
          circles[i].classList.remove('fas');
          circles[i].classList.add('far');
          document.querySelector(`#splash-${i + 1}`).classList.remove('active');
        }
      }
      const scrollTop = this.myRef.current.scrollTop;
      this.setState({
        scrollTop,
      });
      // console.log(this.state.scrollTop);
      // if (parseInt(this.state.scrollTop) === 593) {
      //   // console.log('true');
      //   document.querySelector('#splash-2').classList.add('active');
      // }
    }, 800);
  }

  handleScroll(e, id) {
    const newScroll = this.state.scrollTop + $('#' + id).offset().top;
    $('.splash-container').animate(
      {
        scrollTop: newScroll,
      },
      500
    );
    this.setState({
      scrollTop: newScroll,
    });
  }

  render() {
    return (
      <div
        className="splash-container"
        ref={this.myRef}
        onScroll={this.onScroll}
      >
        <div className="test"></div>
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
            <p className="app-name">Adventr</p>
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
            <div
              onClick={(e) => this.handleScroll(e, 'splash-2')}
              className="bottom-text"
            >
              What is Adventr?
            </div>
          </div>
        </div>
        <div className="splash" id="splash-2">
          <Splash2 />
        </div>
        <div className="splash" id="splash-3">
          <Splash3 />
        </div>
        <div className="splash" id="splash-4">
          <Splash4 />
        </div>
        <div className="splash" id="splash-5">
          <Splash5 />
        </div>
        <div className="splash" id="splash-6">
          <Splash6 />
        </div>
      </div>
    );
  }
}

export default Splash;
