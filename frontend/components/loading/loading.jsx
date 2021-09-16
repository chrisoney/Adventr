import React from 'react';
// import dragonImage from 'images/dragon-logo.png'

const Loading = (props) => {
  return (
    <div className={props.background || 'black-container'}>
      <img src='https://adventr-pro.s3.us-west-1.amazonaws.com/dragon-logo.png' className="dragon-loader" />
    </div>
  );
};

export default Loading;
