import React, { Component } from 'react'

export default class VideoDetail extends Component {
    render() {
        return (
            <div>
                <VideoThumbnail
                    videoUrl="https://dl.dropboxusercontent.com/s/7b21gtvsvicavoh/statue-of-admiral-yi-no-audio.mp4?dl=1"
                    thumbnailHandler={(thumbnail) => console.log(thumbnail)}
                    width={120}
                    height={80}
                />
            </div>
        )
    }
}
