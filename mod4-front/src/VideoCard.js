import React, { Component } from 'react'
import LikeButton from './LikeButton';

export default class VideoCard extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <card>
                    <h1>this.props.video.title</h1>
                    <LikeButton video={this.props.video} />
                </card>
            </div>
        )
    }
}
