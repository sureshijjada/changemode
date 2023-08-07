// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {mode: true}

  onClick = () => {
    this.setState(prevState => ({mode: !prevState.mode}))
  }

  render() {
    const {mode} = this.state
    const style = mode ? 'light' : 'dark'
    const text = !mode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="card">
        <div className={style}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" onClick={this.onClick}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
