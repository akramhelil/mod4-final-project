import React, { Component } from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'
// import Iframe from 'react-iframe'

export default class VideoCard extends Component {
    // console.log(this.props.video)
    render() {
        // console.log(this.props.video)
        return (
            <Card>
             <Image src={this.props.video.snippet.thumbnails.high.url}
                alt="thubmnail"
                onClick={() => this.props.handleImageClick(this.props.video.id.videoId)}
                value={this.props.video.id.videoId} /> 
                <Card.Content>
                  <Card.Header>{this.props.video.snippet.title.slice(0,25)}...</Card.Header>
                  <Card.Meta> Channel: {this.props.video.snippet.channelTitle}</Card.Meta>
                </Card.Content>
                <Card.Content extra>
                <Icon  name="play"/>
                </Card.Content>
            </Card>
        )
    }
}