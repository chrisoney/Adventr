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
        2976,
        ,
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
      this.setState({
        scrollTop: scrollTop,
      });
    }, 300);
  }

  handleScroll(e, id) {
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
        <div className="splash" id="splash-2">
          <div className="splash-2-content">
            <div className="logo">a</div>
            <img src="/assets/sword.svg" className="filter sword-1" />
            {/*must test*/}
            <svg
              className="skull"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path
                  d="M92.406 13.02l-.164 156.353c3.064.507 6.208 1.38 9.39 2.627 36.496 14.306 74.214 22.435 111.864 25.473l43.402-60.416 42.317 58.906c36.808-4.127 72.566-12.502 105.967-24.09 3.754-1.302 7.368-2.18 10.818-2.6l1.523-156.252-75.82 95.552-34.084-95.55-53.724 103.74-53.722-103.74-35.442 95.55-72.32-95.55h-.006zm164.492 156.07l-28.636 39.86 28.634 39.86 28.637-39.86-28.635-39.86zM86.762 187.55c-2.173-.08-3.84.274-5.012.762-2.345.977-3.173 2.19-3.496 4.196-.645 4.01 2.825 14.35 23.03 21.36 41.7 14.468 84.262 23.748 126.778 26.833l-17.75-24.704c-38.773-3.285-77.69-11.775-115.5-26.596-3.197-1.253-5.877-1.77-8.05-1.85zm333.275.19c-2.156.052-5.048.512-8.728 1.79-33.582 11.65-69.487 20.215-106.523 24.646l-19.264 26.818c40.427-2.602 80.433-11.287 119.22-26.96 15.913-6.43 21.46-17.81 21.36-22.362-.052-2.276-.278-2.566-1.753-3.274-.738-.353-2.157-.71-4.313-.658zm-18.117 47.438c-42.5 15.87-86.26 23.856-130.262 25.117l-14.76 20.547-14.878-20.71c-44.985-1.745-89.98-10.23-133.905-24.306-12.78 28.51-18.94 61.14-19.603 93.44 37.52 17.497 62.135 39.817 75.556 64.63C177 417.8 179.282 443.62 174.184 467.98c7.72 5.007 16.126 9.144 24.98 12.432l5.557-47.89 18.563 2.154-5.935 51.156c9.57 2.21 19.443 3.53 29.377 3.982v-54.67h18.69v54.49c9.903-.638 19.705-2.128 29.155-4.484l-5.857-50.474 18.564-2.155 5.436 46.852c8.747-3.422 17.004-7.643 24.506-12.69-5.758-24.413-3.77-49.666 9.01-72.988 13.28-24.234 37.718-46 74.803-64.29-.62-33.526-6.687-66.122-19.113-94.23zm-266.733 47.006c34.602.23 68.407 12.236 101.358 36.867-46.604 33.147-129.794 34.372-108.29-36.755 2.315-.09 4.626-.127 6.933-.11zm242.825 0c2.307-.016 4.617.022 6.93.11 21.506 71.128-61.684 69.903-108.288 36.757 32.95-24.63 66.756-36.637 101.358-36.866zM255.164 332.14c11.77 21.725 19.193 43.452 25.367 65.178h-50.737c4.57-21.726 13.77-43.45 25.37-65.18z"
                  fill="#fff"
                  fillOpacity="1"
                ></path>
              </g>
            </svg>
            <div className="splash-2-text">
              <span className="splash-2-prompt">
                Adventuring is hard, but we made it easy.
              </span>
              <span className="splash-2-description">
                We made it really, really simple for adventurers of all types to
                make a living finishing quests and collecting the rewards.
                Whether it's slaying manticores, recovering relics, or
                uncovering the conspiracy behind the assassination attempt of
                the local tailor, we'll get you the info you need so you can
                make a name for yourself.
              </span>
            </div>
          </div>
        </div>
        <div className="splash" id="splash-3"></div>
        <div className="splash" id="splash-4"></div>
        <div className="splash" id="splash-5"></div>
        <div className="splash" id="splash-6"></div>
      </div>
    );
  }
}

export default Splash;
