import React from 'react';
import './App.css';

import React, { Component } from 'react'

class App extends Component {

  state = {
    videos: []
  }

  fetchVideos = () => {
    fetch('')
      .then(resp => resp.json())
      .then(videos => this.setState({ videos: videos }))
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
