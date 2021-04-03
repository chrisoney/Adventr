import React from 'react';

class Splash5 extends React.Component {
  render() {
    return (
      <>
        <div className="splash-5-content">
          <div className="splash-5-images">
            {/* Text logo */}
            <div className="quest-option">
              <div className="quest-option-circle">
                <span className="fas fa-font"></span>
              </div>
              Text
            </div>
            {/* Image logo */}
            <div className="quest-option">
              <div className="quest-option-circle">
                <span className="fas fa-camera"></span>
              </div>
              Image
            </div>
            {/* Quote logo */}
            <div className="quest-option">
              <div className="quest-option-circle">
                <span className="fas fa-quote-right"></span>
              </div>
              Quote
            </div>
            {/* Audio logo */}
            <div className="quest-option">
              <div className="quest-option-circle">
                <span className="fas fa-music"></span>
              </div>
              Audio
            </div>
            {/* Video logo */}
            <div className="quest-option">
              <div className="quest-option-circle">
                <span className="fas fa-video"></span>
              </div>
              Video
            </div>
          </div>
          <div className="splash-5-text">
            <div className="splash-5-hook">
              Seriously, post any notices you want
            </div>
            <div className="splash-5-description">
              There are lots of different quests you can post, and lots of ways
              to post them. Doesn't mean someone is going to pick up your goblin
              hunt, but nothing's stopping you from trying anyway.
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Splash5;
