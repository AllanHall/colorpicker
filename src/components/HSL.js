import React, { Component } from 'react'

class HSL extends Component {
  state = {
    h: 180,
    s: 50,
    l: 50
  }
  functionH = event => {
    console.log(event.target.value)
    this.setState({
      h: event.target.value
    })
  }
  functionS = event => {
    this.setState({
      s: event.target.value
    })
  }
  functionL = event => {
    this.setState({
      l: event.target.value
    })
  }
  /*  functionDetermineColor = () => {
    if (this.state.h === 0) {
      return 'red'
    }
    if (this.state.h === 120) {
      return 'green'
    }
    if (this.state.h === 240) {
      return 'blue'
    }
  }
*/
  render() {
    return (
      <>
        <main
          className="sliders"
          style={{
            backgroundColor: `hsl(${this.state.h}, ${this.state.s}%, ${
              this.state.l
            }%)`
          }}
        >
          <div>
            <input
              type="range"
              min="1"
              max="360"
              class="slider"
              step="1"
              onChange={this.functionH}
            />
          </div>
          <div>
            <input
              type="range"
              min="1"
              max="100"
              class="slider"
              step="1"
              onChange={this.functionS}
            />
          </div>
          <div>
            <input
              type="range"
              min="1"
              max="100"
              class="slider"
              step="1"
              onChange={this.functionL}
            />
          </div>
          <div className="display-title">
            {/* <p>This should be the color that is displayed</p> */}
            <p>{this.state.h} This should be the value of h</p>
            <p>{this.state.s} This should be the value of s</p>
            <p>{this.state.l} This should be the value of l</p>
          </div>
        </main>
      </>
    )
  }
}
export default HSL
