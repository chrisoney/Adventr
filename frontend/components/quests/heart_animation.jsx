import React from 'react'

class HeartAnimation extends React.Component {
  constructor(props){
    super(props);
    this.state={
      class: this.props.class
    }
  }

  render(){
    return (
      <div className={this.class}></div>
    )
  }
}

export default HeartAnimation;