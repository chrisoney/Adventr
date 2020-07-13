import React from "react";
import { Link } from "react-router-dom";

class Splash extends React.Component {
  render() {
    return (
      <div className="full-page">
        <div className="splash">
          <div className="splash-content">
            <p className="app-name">adventr</p>
            <p className="welcome-text">
              <p>Come for the adventures.</p>
              <p>Stay for the magic items.</p>
            </p>
            <Link to="/signup">
              <button className="signup">Get Started</button>
            </Link>
            <Link to="/login">
              <button className="login">Login</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;
