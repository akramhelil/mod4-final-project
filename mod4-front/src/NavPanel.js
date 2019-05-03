import React, { Component } from 'react'
import UserCard from './UserCard';
import SearchCom from './SearchCom';
import {Container} from 'semantic-ui-react'



export default class NavPanel extends Component {
    render() {
        return (
            <Container floated="left">   
                <SearchCom fetchVideos={this.props.fetchVideos}/>
                <br/>
                <UserCard />
            </Container>
        )
    }
}
