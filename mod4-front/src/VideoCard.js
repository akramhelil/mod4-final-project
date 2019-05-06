import React, { Component } from 'react'
import { Card, Image, Icon, Button, Label, Modal} from 'semantic-ui-react'
import Iframe from 'react-iframe'


const buttonStyle = {
    margin: 20,
    alignItems: "center",
    textAlign: "center"
}

export default class VideoCard extends Component {
    
    state = {
        likes: 0
    }

    handleLikes = () => {
        this.setState({
            likes: this.state.likes + 1
        })
    }
   
    render() {
        console.log(this.props.video)
        return (
            <Card>
             <Image src={this.props.video.snippet.thumbnails.high.url}
                alt="thubmnail"
                value={this.props.video.id.videoId} /> 
                <Card.Content>
                  <Card.Header>{this.props.video.snippet.title.slice(0, 35)}...</Card.Header>
                  <Card.Meta> Channel: {this.props.video.snippet.channelTitle}</Card.Meta>
                </Card.Content>
                <Card.Content extra>
                    <Modal size="small"
                        trigger={<Icon size="large" name="play"
                         />}>
                        <Modal.Content image>
                            <Iframe url={"https://www.youtube.com/embed/"+this.props.video.id.videoId}
                                width="700px"
                                height="450px"
                                frameBorder="0" allow="accelerometer; autoplay;"
                                allowFullscreen={true}> title='videos'
                            </Iframe>
                         </Modal.Content>
                        <Button onClick={this.handleLikes}
                            secondary style={buttonStyle}>
                            <Icon name='heart' /> Like
                        </Button>
                        <Button
                            secondary style={buttonStyle}
                           onClick={() =>  this.props.addToFav(this.props.video)} >
                            Add To Library
                        </Button>
                    </Modal>
                    &nbsp;&nbsp;&nbsp;
                    <Button as='div' labelPosition='right'>
                    <Button icon>
                         <Icon name='heart'/>
                        Likes
                    </Button>
                        <Label as='a' basic pointing='left'>
                         {this.state.likes}
                    </Label>
                    </Button>
                </Card.Content>
            </Card>
        )
    }
}