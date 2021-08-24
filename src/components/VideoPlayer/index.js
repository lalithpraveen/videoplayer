import {Component} from 'react'
import ReactPlayer from 'react-player'
import './index.css'

class VideoPlayer extends Component {
  state = {url: 'https://youtu.be/rt-2cxAiPJk', inputValue: ''}

  onChangeInput = event => {
    this.setState({inputValue: event.target.value})
  }

  onPlay = () => {
    const {inputValue} = this.state

    this.setState({url: inputValue, inputValue: ''})
  }

  render() {
    const {url, inputValue} = this.state
    return (
      <div className="video-container">
        <h1 className="heading">Video Player</h1>
        <input
          type="text"
          onChange={this.onChangeInput}
          className="input"
          placeholder="Enter your URL"
          value={inputValue}
        />
        <button className="button" type="button" onClick={this.onPlay}>
          Play
        </button>
        <div className="responsive-container">
          <ReactPlayer url={url} controls="true" />
        </div>
      </div>
    )
  }
}

export default VideoPlayer
