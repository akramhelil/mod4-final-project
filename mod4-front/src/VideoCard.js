import React, { Component } from 'react'
import LikeButton from './LikeButton';
// import Iframe from 'react-iframe'
export default class VideoCard extends Component {

    render() {
        // console.log(this.props.video.id.videoId)
        return (
            <div>
                <div>
                    <h2>{this.props.video.snippet.title}</h2>
                    <img src={this.props.video.snippet.thumbnails.high.url}
                        alt="thubmnail"
                        onClick={() => this.props.handleImageClick(this.props.video.id.videoId)}
                        value={this.props.video.id.videoId}
                    />
                    {/* <Iframe url={"https://www.youtube.com/embed/"+this.props.video.id.videoId}
                    frameBorder="5" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen={true} id={this.props.video.id}> title='videos'</Iframe> */}
                    <LikeButton videoId={this.props.video.id.videoId} />
                    <h2>
                    {this.props.video.likes}
                    </h2>
                </div>
            </div>
        )
    }
}
