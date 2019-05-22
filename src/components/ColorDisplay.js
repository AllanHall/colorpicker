import React, { Component } from 'react'
import HSL from './HSL'

class ColorDisplay extends Component {
  render() {
    const divStyle = {
      backgroundColor: `hsl(${this.state.h}, 50%, 50%)`
    }
    return (
      <>
        <HSL />
        <div className="display-title">Color Display</div>
        <div className="display" style={divStyle} />
      </>
    )
  }
}

export default ColorDisplay
