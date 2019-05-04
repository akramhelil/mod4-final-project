import React, { Component } from 'react'
import VideoCard from './VideoCard';


export default class UserLibrary extends Component {
    render() {
        return (
            <div>
                <br/>
               <VideoCard video={this.props.video}/>
            </div>
        )
    }
}
