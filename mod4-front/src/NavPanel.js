import React, { Component } from 'react'
import UserCard from './UserCard';
import SearchCom from './SearchCom';



export default class NavPanel extends Component {
    render() {
        return (
            <div>
               <UserCard/>
                <SearchCom fetchVideos={this.props.fetchVideos}/>
            </div>
        )
    }
}
