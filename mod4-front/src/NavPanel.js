import React, { Component } from 'react'
import UserCard from './UserCard';
import SearchCom from './SearchCom';
import {Container} from 'semantic-ui-react'
import UserLibrary from './UserLibrary';

const searchStyle = {
    margin: 20,
    alignItems: "center",
    textAlign: "center"
}


export default class NavPanel extends Component {
    render() {
        return (
            <Container >   
                <div style={searchStyle}>
                    <div>
                        <img src="./logo.png"
                        alt="logo" width="150" height="150" />
                    </div>
                    <hr />
                    <br/>
                    <SearchCom fetchVideos={this.props.fetchVideos} />
                </div>
                <div style={searchStyle}>
                <UserCard />
                </div>
                <div style={searchStyle}>
                <h2> 
                  User Favortie Library
                <hr/>
                  </h2>
                 {this.props.userFav.slice(0, 5).map(video => <UserLibrary
                        key={video.id.videoId}
                        video={video}
                        style={searchStyle}
                    />
                    )}
                </div>
            </Container>
        )
    }
}
