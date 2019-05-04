import React, { Component } from 'react'
import VideoCard from './VideoCard';
export default class UserLibrary extends Component {
    render() {
        return (
            <div>
                <br/>
                <h2>
                User Favortie Library
                </h2>
               <VideoCard video={this.props.video}/>
            </div>
        )
    }
}
