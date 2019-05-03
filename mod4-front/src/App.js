import React from 'react';
import VideoDeck from './VideoDeck';
import './assets/App.css';
import NavPanel from './NavPanel';


const API_KEY = 'AIzaSyCVv6nu0yprprLfzrpjiRkbLSrS7uPdik4'

class App extends React.Component {
  
  state = {
    videos: []
  
  }

//fetch the videos for the fornt page video Dex
  fetchVideos = (query= '') => {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&type=video&key=${API_KEY}`)
      .then(resp => resp.json())
      .then(videos => this.setState({ videos: videos.items}) )
  }

  componentDidMount() {
    this.fetchVideos()
  }

  handleImageClick= (id) => {
    console.log('ImageClicked', id)
  }

  render() {
    // console.log(this.state.videos)
    return (
      <div>
        <NavPanel fetchVideos={this.fetchVideos}/>
        <VideoDeck videos={this.state.videos}
          handleImageClick={this.handleImageClick}
        />
      </div>
    )
  }
}

export default App
