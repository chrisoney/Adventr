import React from 'react';
import { Link } from 'react-router-dom';

class Splash6 extends React.Component {
  render() {
    return (
      <>
        <div className="splash-6-content">
          <div className="splash-6-text">
            <div className="splash-6-hook">
              Now that you know the score, what are you waiting for?
            </div>
            <div className="splash-6-description">
              Your destiny awaits. Welcome to Adventr.
            </div>
          </div>
          <Link to="/signup">
            <button className="signup">Get Started</button>
          </Link>
          <Link to="/login">
            <button className="login">Login</button>
          </Link>
        </div>
      </>
    );
  }
}

export default Splash6;
