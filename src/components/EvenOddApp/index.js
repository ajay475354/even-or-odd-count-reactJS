import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  incrementing = () => {
    const random = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + random}))
  }

  render() {
    const {count} = this.state
    const evenOrOddText = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Count {count}</h1>
          <p className="para">Count is {evenOrOddText}</p>
          <button type="button" className="button" onClick={this.incrementing}>
            Increment
          </button>
          <p className="detail">*Increase By Random Number Between 0 To 100 </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
