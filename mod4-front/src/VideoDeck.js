import React, { Component } from 'react'

export default class VideoDeck extends Component {
    render() {
        console.log(this.props)
        let renderVideos = this.props.videos.map((video) => {
            <VideoCard key={video.key} video={video} />
        })
        return (
            <div>
                {renderVideos}
            </div>
        )
    }
}
