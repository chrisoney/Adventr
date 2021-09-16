import React from 'react';

class Splash4 extends React.Component {
  render() {
    return (
      <>
        <div className="splash-4-content">
          <div className="splash-4-images">
            <img src={window.splashFourImageOne} />
            <img src={window.splashFourImageTwo} />
          </div>
          <div className="splash-4-text">
            <div className="splash-4-hook">You already know the work.</div>
            <div className="splash-4-description">
              Once you sign on with a guide, all of its quest notices show up in
              your dashboard, just like you'd expect. See something great? Grab
              a copy for your quest log. Add some notes if you like. Put your
              own spin on it. Other adventurers will surely do the same to your
              posts. That's how you build a reputation here.
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Splash4;
