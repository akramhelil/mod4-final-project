import React, { Component } from 'react'
import { Card, Image, Icon, Button, Label, Modal } from 'semantic-ui-react'
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

    handleLikes = (video) => {
        console.log('Like Clicked', video)
        this.setState({
            likes: this.state.likes + 1
        }, () => this.likesFetch())
    }

    likesFetch = () => {
        const likedVideo = {
            title: this.props.video.snippet.title,
            url: this.props.video.id.videoId,
            likes: 1,
            thumbnails:this.props.video.snippet.thumbnails.high.url
        }

        fetch('http://localhost:4000/videos', {
            method: 'POST',
            headers:
                { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(likedVideo)
        })
            .then(res => res.json())
            .then(console.log)
    }

    handleFav = () => {
        const favVid = {
            title: this.props.video.snippet.title,
            url: this.props.video.id.videoId,
            likes: 1,
            thumbnails:this.props.video.snippet.thumbnails.high.url
        }
        fetch('http://localhost:4000/videos', {
            method: 'POST',
            headers:
                { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(favVid)
        })
            .then(res => res.json())
            .then((favVid) => {
                this.props.addToFav(favVid)
            })
    }


    render() {
        // console.log(this.props)
        return (
            <React.Fragment>
                <Card>
                    <Image src={this.props.video.snippet.thumbnails.high.url}
                        alt="thubmnail"
                        value={this.props.video.id.videoId} />
                    <Card.Content>
                        <Card.Header>{this.props.video.snippet.title.slice(0, 35)}...</Card.Header>
                    </Card.Content>
                    <Card.Content extra>
                        <Modal size="small"
                            trigger={<Icon size="large" name="play"
                            />}>
                            <Modal.Content image>
                                <Iframe url={"https://www.youtube.com/embed/" + this.props.video.id.videoId}
                                    width="700px"
                                    height="450px"
                                    frameBorder="0" allow="accelerometer; autoplay;"
                                    allowFullscreen={true}> title='videos'
                                </Iframe>
                            </Modal.Content>
                            <Button onClick={()=> this.handleLikes(this.props.video)}
                                 style={buttonStyle}>
                                <Icon name='heart' /> Like
                            </Button>
                            {this.props.currentUser ?
                            <Button
                                secondary style={buttonStyle}
                                onClick={this.handleFav} >
                                Add To Library
                            </Button> : null
                            }
                        </Modal>
                        &nbsp;&nbsp;&nbsp;
                        <Button as='div' labelPosition='right'>
                            <Button icon>
                                <Icon name='heart' />
                                Likes
                        </Button>
                            <Label as='a' basic pointing='left'>
                                {this.state.likes}
                            </Label>
                        </Button>
                    </Card.Content>
                </Card>
            </React.Fragment>
        )
    }
}