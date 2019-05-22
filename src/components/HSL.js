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

  render() {
    return (
      <>
        <main
          className="sliders"
          style={{ backgroundColor: `hsl(${this.state.h}, 50%, 50%)` }}
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
        </main>
      </>
    )
  }
}
export default HSL
