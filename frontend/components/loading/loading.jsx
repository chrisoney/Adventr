import React from 'react';

const Loading = (props) => {
  return (
    <div className={props.background || 'black-container'}>
      <img src="/assets/dragon-logo.png" className="dragon-loader" />
    </div>
  );
};

export default Loading;
