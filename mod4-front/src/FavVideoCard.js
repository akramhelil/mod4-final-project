import React, { Component } from 'react';
import { Card, Image, Icon, Button, Modal } from 'semantic-ui-react'
import Iframe from 'react-iframe'

const buttonStyle = {
    margin: 20,
    alignItems: "center",
    textAlign: "center"
}

class FavVideoCard extends Component {
    

    render() {
        return (
            <div>
                 <Card>
                <Image src={this.props.video.thumbnails}
                    alt="thubmnail"/>
                <Card.Content>
                    <Card.Header>{this.props.video.title}</Card.Header>
                </Card.Content>
                <Card.Content extra>
                    <Modal size="small"
                        trigger={<Icon size="large" name="play" />}>
                        <Modal.Content image>
                            <Iframe url={"https://www.youtube.com/embed/"+this.props.video.url}
                                width="700px"
                                height="450px"
                                frameBorder="0" allow="accelerometer; autoplay;"
                                allowFullscreen={true}> title='videos'
                            </Iframe>
                            </Modal.Content>
                            </Modal>
                        <Button onClick={this.handleDelete}
                            secondary style={buttonStyle}>
                            <Icon name='trash' /> Delete
                        </Button>
                </Card.Content>
            </Card>
            
         </div>
        )
    }
}


export default FavVideoCard;