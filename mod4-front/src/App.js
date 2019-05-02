import React from 'react';
import './App.css';


class App extends React.Component {

  state = {
    videos: []
  }

  fetchVideos = () => {
    fetch('http://localhost:4000/users')
      .then(resp => resp.json())
      .then(console.log)
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
