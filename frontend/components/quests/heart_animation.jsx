import React from 'react'

class HeartAnimation extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let isVis = false;
    isVis = this.props.visible;
    const display = isVis ? (<div className={this.props.class}></div>) : null;
    return (
      <>
        {display}
      </>
    )
  }
}

export default HeartAnimation;