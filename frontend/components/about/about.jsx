import React from "react";

class About extends React.Component {

  render(){      
    return (

      <div className="dashboard-container">
        <div className="dashboard">
          <div className="dashboard-header">
            <h1 className="dash-title">About</h1>
          </div>
          {/* LinkedIn */}
          <div className="quest-container-dash">
            <img className="avatar-dash"
                 src="https://adventr-dev.s3-us-west-1.amazonaws.com/face.jpg"
            ></img>
            <div className="quest">
              <div className="quest-header"><span>Chris Oney</span></div>
              <div className="title">Portfolio</div>
              <div className="about-body">
                <a href="https://www.chrisoney.com">Check out my portfolio site!</a>
              </div>
              <div className="quest-footer">
                <div className="quest-footer-left"></div>
                <div className="quest-footer-right">
                  <div className="quest-buttons">
                    <a href="https://www.chrisoney.com"><span className="about-icon fas fa-smile"></span></a>
                  </div>
                </div>
              </div>
				    </div>
			    </div>
          {/* LinkedIn */}
          <div className="quest-container-dash">
            <img className="avatar-dash"
                 src="https://adventr-dev.s3-us-west-1.amazonaws.com/face.jpg"
            ></img>
            <div className="quest">
              <div className="quest-header"><span>Chris Oney</span></div>
              <div className="title">LinkedIn</div>
              <div className="about-body">
                <a href="https://www.linkedin.com/in/christopher-oney-317b84132/">Check out my LinkedIn profile!</a>
              </div>
              <div className="quest-footer">
                <div className="quest-footer-left"></div>
                <div className="quest-footer-right">
                  <div className="quest-buttons">
                    <a href="https://www.linkedin.com/in/christopher-oney-317b84132/"><span className="about-icon fab fa-linkedin"></span></a>
                  </div>
                </div>
              </div>
				    </div>
			    </div>

          {/* AngelList */}
          <div className="quest-container-dash">
            <img className="avatar-dash"
                 src="https://adventr-dev.s3-us-west-1.amazonaws.com/face.jpg"
            ></img>
            <div className="quest">
              <div className="quest-header"><span>Chris Oney</span></div>
              <div className="title">AngelList</div>
              <div className="about-body">
                <a href="https://angel.co/u/christopher-oney">Check out my AngelList profile!</a>
              </div>
              <div className="quest-footer">
                <div className="quest-footer-left"></div>
                <div className="quest-footer-right">
                  <div className="quest-buttons">
                    <a href="https://angel.co/u/christopher-oney"><span className="about-icon fab fa-angellist"></span></a>
                  </div>
                </div>
              </div>
				    </div>
			    </div>

          {/* Github */}
          <div className="quest-container-dash">
            <img className="avatar-dash"
                 src="https://adventr-dev.s3-us-west-1.amazonaws.com/face.jpg"
            ></img>
            <div className="quest">
              <div className="quest-header"><span>Chris Oney</span></div>
              <div className="title">Github</div>
              <div className="about-body">
                <a href="https://github.com/chrisoney">Check out my Github profile!</a>
              </div>
              <div className="quest-footer">
                <div className="quest-footer-left"></div>
                <div className="quest-footer-right">
                  <div className="quest-buttons">
                    <a href="https://github.com/chrisoney"><span className="about-icon fab fa-github"></span></a>
                  </div>
                </div>
              </div>
				    </div>
			    </div>

        </div>
      </div>

    )
  }
}

export default About;