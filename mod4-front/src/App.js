import React from 'react';
import VideoDeck from './VideoDeck';

import './assets/App.css';



class App extends React.Component {

  state = {
    videos: []
  }
//fetch the videos for the fornt page video Dex
  fetchVideos = () => {
    fetch('http://localhost:4000/videos')
      .then(resp => resp.json())
      .then(videos => this.setState({videos}))
  }

  componentDidMount() {
    this.fetchVideos()
  }

  render() {
    console.log(this.state.videos)
    return (
      <div>
        <VideoDeck videos={this.state.videos} />
      </div>
    )
  }
}

export default App
