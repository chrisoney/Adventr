import React from 'react';
import Icons from './icons';

class Splash2 extends React.Component {
  render() {
    return (
      <div className="splash-2-content">
        <Icons />
        <div className="splash-2-text">
          <span className="splash-2-prompt">
            Adventuring is hard, but adventr couldn't be simpler.
          </span>
          <span className="splash-2-description">
            We made it really, really simple for adventurers of all types to
            make a living finishing quests and collecting the rewards. Whether
            it's slaying manticores, recovering relics, or uncovering the
            conspiracy behind the assassination attempt of the local tailor,
            we'll get you the info you need so you can make a name for yourself.
          </span>
        </div>
      </div>
    );
  }
}

export default Splash2;
