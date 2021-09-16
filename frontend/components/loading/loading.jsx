import React from 'react';
// import dragonImage from 'images/dragon-logo.png'

const Loading = (props) => {
  return (
    <div className={props.background || 'black-container'}>
      <img src="<%= image_url('dragon-logo.png') %>" className="dragon-loader" alt='dragon logo'/>
    </div>
  );
};

export default Loading;
