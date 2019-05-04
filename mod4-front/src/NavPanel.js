import React, { Component } from 'react'
import UserCard from './UserCard';
import SearchCom from './SearchCom';
import {Container} from 'semantic-ui-react'
import UserLibrary from './UserLibrary';

const searchStyle = {
    margin: 20,
    alignItems: "center"
}

export default class NavPanel extends Component {
    render() {
        return (
            <Container>   
                <div style={searchStyle}>
                    <SearchCom fetchVideos={this.props.fetchVideos}/>
                </div>
                <br />
                <div>
                <UserCard />
                </div>
                {this.props.userFav.slice(0, 5).map(video => <UserLibrary key={video.id.videoId} video={video}/> )}
            </Container>
        )
    }
}
