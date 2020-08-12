import React from 'react'

class HeartAnimation extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const display = this.props.visible ? (<div className={this.props.class}></div>) : null;
    return (
      <>
        {display}
      </>
    )
  }
}

export default HeartAnimation;