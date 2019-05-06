import React from 'react';
import VideoDeck from './VideoDeck';
import './assets/App.css';
import NavPanel from './NavPanel';
import { Grid } from 'semantic-ui-react';
import Data from './data';
const API_KEY = process.env.REACT_APP_MOD4_API_KEY;

  
// const API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&type=video&key=${API_KEY}`

const dexStyle = {
  margin: 20,
  alignItems: "center"
}

class App extends React.Component {

  state = {
    videos: [],
    userFav: [],
    currentUser: null
  }

  // //fetch the videos for the fornt page video Dex
  fetchVideos = (query = 'cat') => {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${query}&type=video&key=${API_KEY}`)
      .then(resp => resp.json())
      .then(videos => {
        const updatedVideos = videos.items.map(video => {
          return {
            ...video,
            likes: 0
          }
        })
        this.setState({
          videos: updatedVideos
        })
      })
  }

    componentDidMount() {
      this.fetchVideos()
      // this is where we will set the localStorage
    }

  createVideo = (videoObj) => {
    let newVideo = {
      title: videoObj.snippet.title,
      url: videoObj.id.videoId,
      likes: 1
    }
    fetch('http://localhost:4000/videos', {
      method: 'POST',
      headers:
        { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(newVideo)
    })
      .then(res => res.json())
      .then(videoObj => this.addToFav(videoObj))
  }

  addToFav = (videoObj) => {
    const favVideo = {
      video_id: videoObj.id
      // user_id: this.state.currentUser.id
      // post request Fetch to the Favorite 
    }

    fetch('http://localhost:4000/favorites', {
    method: 'POST',
    headers:
      {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    body: JSON.stringify(favVideo)
    })
    .then(res => res.json())
    .then(console.log)
  }

  // Current User funtion or Validation both front and back 
  //set the current user and track the current user


  render() {
    // console.log(this.state.videos)
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={5}>
            <NavPanel fetchVideos={this.fetchVideos} userFav={Data.items} />
          </Grid.Column>
          <Grid.Column width={10} style={dexStyle}>
            <VideoDeck videos={this.state.videos}
              addToFav={this.addToFav}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default App;
