import React from "react";

class About extends React.Component {
  render(){
    return (

      <div className="dashboard-container">
        <div className="dashboard">
          <div className="dashboard-header">
            <h1 className="dash-title">About</h1>
          </div>
          <div className="quest-container-dash">
            <img className="avatar-dash"
                 src="https://adventr-dev.s3-us-west-1.amazonaws.com/face.jpg"
            ></img>
            <div className="quest">
              <div className="quest-header">Chris Oney</div>
              <div className="about-body">LinkedIn</div>
              <div className="quest-footer-container"></div>
				    </div>
			    </div>
        </div>
      </div>

    )
  }
}

export default About;