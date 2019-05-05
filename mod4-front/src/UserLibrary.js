import React, { Component } from 'react'
import VideoCard from './VideoCard';

const userlibStyle = {
    marginLeft: 20
 }
export default class UserLibrary extends Component {
    render() {
        return (
            <div style={userlibStyle}>
                <VideoCard video={this.props.video} />
                <br/>

            </div>
        )
    }
}
