import React from 'react';
import VideoDeck from './VideoDeck';
import './assets/App.css';
import NavPanel from './NavPanel';
import { Grid } from 'semantic-ui-react';
import Data from './data';


// `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&type=video&key=${API_KEY}`

const dexStyle = {
  margin: 20,
  alignItems: "center"
}

class App extends React.Component {
  
  state = {
    videos: [],
    userFav: []
  }

// //fetch the videos for the fornt page video Dex
  fetchVideos = (query= 'cat') => {
    fetch(Data)
      .then(resp => resp.json())
      .then(videos => {
        const updatedVideos = videos.map(video => {
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

//   componentDidMount() {
//     this.fetchVideos()
//   }
  
  createVideo = (videoObj) => {
    let newVideo = {
      title: videoObj.snippet.title,
      url: videoObj.id.videoId,
      likes: 1
    }


   fetch('http://localhost:4000/videos', {
   method: 'POST',
   headers:
   {'Content-Type': 'application/json', 'Accept': 'application/json'},
   body: JSON.stringify(newVideo)
   })
    .then(res => res.json())
    .then(console.log)
  }

  addToFav = (videoObj) => {
    this.createVideo(videoObj)
    //add to the userfav State
  }

  
  render() {
    // console.log(this.state.videos)
    return (

      <Grid>
        <Grid.Row>
          <Grid.Column width={5}>
            <NavPanel fetchVideos={this.fetchVideos} userFav={Data.items}/>
          </Grid.Column>
          <Grid.Column width={10} style={dexStyle}>
            <VideoDeck videos={Data.items}
              addToFav={this.addToFav}
            />
          </Grid.Column>
          </Grid.Row>
       </Grid>
    )
  }
}

export default App;
