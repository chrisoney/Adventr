import React from 'react';
// import dragonImage from 'images/dragon-logo.png'

const Loading = (props) => {
  return (
    <div className={props.background || 'black-container'}>
      <img src='images/dragon-logo.png' className="dragon-loader" />
    </div>
  );
};

export default Loading;
