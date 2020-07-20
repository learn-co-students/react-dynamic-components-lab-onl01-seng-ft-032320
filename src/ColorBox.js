import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }
  
 
  render() {
    console.log(parseFloat(this.props.opacity) - .1)
    let newValue = parseFloat(this.props.opacity) - .1
    if (this.props.opacity >= .2){
      return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        <ColorBox opacity={newValue} />
      </div>
      )
    }
    
    else{
      return null
    }
  }

}

//let box = document.querySelector('.color-box')
//box.style.opacity = 1
//let newValue = parseFloat(box.style.opacity) - .1
//box.style.opacity = newValue

//repeat 3 and 4 until reach value of .1