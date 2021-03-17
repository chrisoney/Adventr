import React from 'react';
import Splash1 from './slides/splash1';
import Splash2 from './slides/splash2/splash2';
import Splash3 from './slides/splash3';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.myRef = React.createRef();
    this.state = {
      scrollTop: 0,
      scrollPosArr: [0, 593, 1187, 1780, 2374, 2968],
    };
  }
  onScroll() {
    // console.log(this.state.scrollTop);
    setTimeout(() => {
      const circles = document.getElementsByClassName('fa-circle');
      for (let i = 0; i < circles.length; i++) {
        if (
          this.state.scrollPosArr[i] >= parseInt(this.state.scrollTop) - 50 &&
          this.state.scrollPosArr[i] <= parseInt(this.state.scrollTop) + 50
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
          <Splash1 />
        </div>
        <div className="splash" id="splash-2">
          <Splash2 />
        </div>
        <div className="splash" id="splash-3">
          <Splash3 />
        </div>
        <div className="splash" id="splash-4"></div>
        <div className="splash" id="splash-5"></div>
        <div className="splash" id="splash-6"></div>
      </div>
    );
  }
}

export default Splash;
