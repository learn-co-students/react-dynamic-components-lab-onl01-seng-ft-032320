import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    // console.log(this.props.opacityValue)
    const anotherBox = () =>{if(this.props.opacity >= .2) {
      return <ColorBox opacity={this.props.opacity -.1}/>
    }else {
      return null
    }}
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {anotherBox()}
      </div>
    )
  }

}

