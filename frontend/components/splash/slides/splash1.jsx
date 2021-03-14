import React from 'react';
import { Link } from 'react-router-dom';

class Splash1 extends React.Component {
  render() {
    return (
      <>
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
      </>
    );
  }
}

export default Splash1;
