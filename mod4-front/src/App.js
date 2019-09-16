import React from 'react';
import VideoDeck from './VideoDeck';
import './assets/App.css';
import NavPanel from './NavPanel';
import { Grid } from 'semantic-ui-react';
import Data from './data';
import { Route, Switch } from 'react-router-dom'
import SignUp from './SignUp'
// import { Fragment } from 'react'
import UserLogin from './UserLogin';
import FavVideo from './FavVideo';
// import VideoLib from './container/VideoLib';

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
    currentUser: null,
    favVideo: [],
    localVideos:[]
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


fetchFav = () => {
    fetch(`http://localhost:4000/users/${this.state.currentUser.id}`)
    .then(res => res.json())
      .then(response => this.setState({
        favVideo: response.videos
      })
      )
}



  componentDidMount() {
    this.fetchVideos()
    if (this.state.currentUser) {
      this.fetchFav()
    }
  }

  createVideo = (videoObj) => {
    console.log(videoObj)
    let newVideo = {
      title: videoObj.snippet.title,
      url: videoObj.id.videoId,
      likes: 1,
      thumbnails: null
    }
    fetch('http://localhost:4000/videos', {
      method: 'POST',
      headers:
        { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ video: newVideo })
    })
      .then(res => res.json())
      .then(favVid => this.addToFav(favVid))
  }

  addToFav = (favVid) => {
    this.setState((prevState) => ({
      favVideo: [...prevState.favVideo,favVid]
  }))
 
    const favVideo = {
      video_id: favVid.id,
      user_id: this.state.currentUser.id
    }
    

    fetch('http://localhost:4000/favorites', {
      method: 'POST',
      headers:
      {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({favorite: favVideo})
    })
      .then(res => res.json())
      .then(newFav => {
        this.setState({
          favVideo: [...this.state.favVideo, favVid]
      })
    })
    this.fetchFav()

  }

  setCurrentUser = (response) => {
    this.setState({
      currentUser: response.user,
      favVideo: response.user.videos ? response.user.videos : 0
    }, () => {
      localStorage.setItem("token", response.token)
    })
  }

  handleDelete = () => {
    console.log("Deleting ...")
  }



  render() {
    // console.log(this.state.currentUser)
    // console.log(this.state.favVideo)
    return (
      <Switch>
        <Route path='/signup' render={(props) => {
          return <SignUp setCurrentUser={this.setCurrentUser} {...props} />
        }} />
        <Route path='/favorites' render={(props) => {
          return <FavVideo
            currentUser={this.state.currentUser}
            favVideo={this.state.favVideo}/>
        }} />
        <Route path='/login' render={(props) => {
          return <UserLogin setCurrentUser={this.setCurrentUser} {...props} />
        }} />
        {/* <Route path='/videos' component={<VideoLib />} /> */}
        <Grid>
          <Grid.Row>
            <Grid.Column width={5}>
              <Route path="/" render={(routeProps) => {
                return <NavPanel
                   addToFav={this.addToFav}
                  fetchVideos={this.fetchVideos}
                  userFav={Data.items}
                  setCurrentUser={this.setCurrentUser}
                  currentUser={this.state.currentUser}
                  {...routeProps} />
              }} />
            </Grid.Column>
            <Grid.Column width={10} style={dexStyle}>
              <Route path='/' render={(routeProps) => {
                return <VideoDeck
                  {...routeProps}
                  videos={this.state.videos}
                  addToFav={this.addToFav}
                  currentUser={this.state.currentUser}
                />
              }} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Switch>
    )
  }
}

export default App;
