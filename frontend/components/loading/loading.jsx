import React from 'react';

const Loading = (props) => {
  return (
    <div className={props.background}>
      <img src="/assets/dragon-logo.png" className="dragon-loader" />
    </div>
  );
};

export default Loading;