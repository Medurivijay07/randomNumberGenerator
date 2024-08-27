// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {random: 0}

  onGenerating = () => {
    this.setState({random: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {random} = this.state
    return (
      <div className="main-container">
        <div className="random-number-card">
          <h1 className="heading">Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button className="button" type="button" onClick={this.onGenerating}>
            Generate
          </button>
          <p className="number">{random}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
