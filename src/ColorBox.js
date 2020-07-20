import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [

    ]
  }

  render() {
    const opacityValue = this.props.opacity


    if (opacityValue < 0.2) {
      return null
      // (
      //   < div className="color-box" style={{ opacity: opacityValue }}>

      //   </div >
      // )
    }

    // while (opacityValue >= 0.2) {
    //   opacityValue -= 0.1

    // }

    // }
    // }


    return (

      < div className="color-box" style={{ opacity: opacityValue }}>
        <ColorBox opacity={opacityValue - 0.1} />
      </div >
    )
  }

}

