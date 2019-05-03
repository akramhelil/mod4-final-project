import React, { Component } from 'react'
import VideoCard from './VideoCard';
export default class VideoDeck extends Component {

        
    render() {
        return (
            <div>
                {this.props.videos.map(video =>
                    <VideoCard
                        video={video}
                        key={video.id.videoId}
                        handleImageClick={this.props.handleImageClick}
                    />
                )}
            </div>
        )
    }
}
