import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }
  let newValue = parseFloat(this.props.value) - .1

  render() {
    return (
      <div className="color-box" style={{opacity: 1}}>
        { 
        return this.props.value < .2 ? null : (<div><className="color-box" style={{opacity: newValue}}/div>)
        }
      </div>
    )
  }

}

//let box = document.querySelector('.color-box')
//box.style.opacity = 1
//let newValue = parseFloat(box.style.opacity) - .1
//box.style.opacity = newValue

//repeat 3 and 4 until reach value of .1