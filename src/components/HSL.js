import React, { Component } from 'react'

class HSL extends Component {
  state = {
    h: Math.floor(Math.random() * 360),
    s: Math.floor(Math.random() * 100),
    l: Math.floor(Math.random() * 100),
    a: Math.floor(Math.random() * 100) / 100
  }
  functionH = event => {
    console.log(event)
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
  functionA = event => {
    console.log(event.target.value)
    this.setState({
      a: event.target.value
    })
  }
  functionPickRandomColor = () => {
    this.setState({
      h: Math.floor(Math.random() * 360),
      s: Math.floor(Math.random() * 100),
      l: Math.floor(Math.random() * 100),
      a: Math.floor(Math.random() * 100) / 100
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
        <section className="pattern">
          <main
            className="sliders"
            style={{
              backgroundColor: `hsl(${this.state.h}, ${this.state.s}%, ${
                this.state.l
              }%, ${this.state.a})`
            }}
          >
            <header className="title">Pick a color, any color</header>
            <div>
              <input
                type="range"
                min="1"
                max="360"
                class="slider"
                step="1"
                onChange={this.functionH}
                value={this.state.h}
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
                value={this.state.s}
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
                value={this.state.l}
              />
            </div>
            <div>
              <input
                type="range"
                min="0"
                max="1"
                class="slider"
                step="0.01"
                onChange={this.functionA}
                value={this.state.a}
              />
            </div>
            <div className="display-info">
              {/* <p>This should be the color that is displayed</p> */}
              <p>Hue {this.state.h}</p>
              <p>Saturation {this.state.s}%</p>
              <p>Lightness {this.state.l}%</p>
              <p>Alpha {this.state.a}</p>
            </div>
            <button className="button" onClick={this.functionPickRandomColor}>
              CAN DO
            </button>
          </main>
        </section>
      </>
    )
  }
}
export default HSL
