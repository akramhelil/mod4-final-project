import React, { Component } from 'react'
import { Card, Image, Icon, Button, Label } from 'semantic-ui-react'
// import Iframe from 'react-iframe'

export default class VideoCard extends Component {
    // need to pull the data of likes from the back end onclick will be updating the
    // liked video data front end and back end, and reset the state as well for this specific 
    // component
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
                  <Card.Header>{this.props.video.snippet.title.slice(0, 35)}...</Card.Header>
                  <Card.Meta> Channel: {this.props.video.snippet.channelTitle}</Card.Meta>
                </Card.Content>
                <Card.Content extra>
                    <Icon size="large" name="play" />
                    &nbsp;&nbsp;&nbsp;
                    <Button as='div' labelPosition='right'>
                    <Button icon>
                         <Icon name='heart'/>
                        Likes
                    </Button>
                        <Label as='a' basic pointing='left'>
                         {this.props.video.id.videoId.slice(0,5)}
                    </Label>
                    </Button>
                </Card.Content>
            </Card>
        )
    }
}