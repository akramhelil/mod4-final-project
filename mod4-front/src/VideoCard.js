import React, { Component } from 'react'
import LikeButton from './LikeButton';
import Iframe from 'react-iframe'
export default class VideoCard extends Component {

    render() {

        return (
            <div>
                <div>
                    <h2>{this.props.video.title}</h2>
                    <Iframe  url={this.props.video.url} frameBorder="5" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen={true} id={this.props.video.id}> title='videos'</Iframe>
                    <LikeButton video={this.props.video.id} />
                    <h2>
                    {this.props.video.likes}
                    </h2>
                </div>
            </div>
        )
    }
}
