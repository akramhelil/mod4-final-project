import React from 'react';
import VideoDeck from './VideoDeck';
import './assets/App.css';
import NavPanel from './NavPanel';
import { Grid} from 'semantic-ui-react';
import Data from './data';
// import SplitPane from 'react-split-pane'


// const API_KEY = "AIzaSyCVv6nu0yprprLfzrpjiRkbLSrS7uPdik4"
// const API_KEY = "AIzaSyAnPmsfU_QtSoXRSZXSVTt0fyWrbbh9p2I"
// `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&type=video&key=${API_KEY}`

class App extends React.Component {
  
  state = {
    videos: [],
    userFav: []
  
  }

// //fetch the videos for the fornt page video Dex
//   fetchVideos = (query= 'cat') => {
//     fetch(Data)
//       .then(resp => resp.json())
//       .then(videos => this.setState({ videos: videos.items}) )
//   }

//   componentDidMount() {
//     this.fetchVideos()
//   }

  handleImageClick = (id) => {
    
    console.log('ImageClicked', id)

  }

  
  render() {
    // console.log(this.state.videos)
    return (

      <Grid>
        <Grid.Row>
          <Grid.Column width={5}>
            <NavPanel fetchVideos={this.fetchVideos} userFav={Data.items}/>
          </Grid.Column>
      <Grid.Column width={10}>
      <VideoDeck videos={Data.items} handleImageClick={this.handleImageClick}/>
      </Grid.Column>
        </Grid.Row>
        </Grid>
    //   <SplitPane split="vertical" defaultSize={400}>
    //     <div>
    //   <NavPanel fetchVideos={this.fetchVideos}/>
    //    </div>
    //     <div>
    //     <VideoDeck videos={Data.items} handleImageClick={this.handleImageClick}/>
    //    </div>
    // </SplitPane>
    )
  }
}

export default App;
