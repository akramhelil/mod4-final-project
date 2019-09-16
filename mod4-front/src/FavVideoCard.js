import React from 'react';
import { Card, Image, Icon, Button, Modal } from 'semantic-ui-react'
import Iframe from 'react-iframe'

const buttonStyle = {
    margin: 20,
    alignItems: "center",
    textAlign: "center"
}

function FavVideoCard(props) {
    console.log(props)
    return (
        <div>
            <Card style={buttonStyle}>
                <Image src={props.video.thumbnails}
                    alt="thubmnail"/>
                <Card.Content>
                    <Card.Header>{props.video.title.slice(0,35)}</Card.Header>
                </Card.Content>
                <Card.Content extra>
                    <Modal size="small"
                        trigger={<Icon size="large" name="play" />}>
                        <Modal.Content image>
                            <Iframe url={"https://www.youtube.com/embed/"+props.video.url}
                                width="700px"
                                height="450px"
                                frameBorder="0" allow="accelerometer; autoplay;"
                                allowFullscreen={true}> title='videos'
                            </Iframe>
                            </Modal.Content>
                    </Modal>
                    
                        <Button onClick={props.handleDelete(props.video.id)}
                            secondary style={buttonStyle}>
                            <Icon name='trash' /> Delete
                        </Button>
                </Card.Content>
            </Card>
        </div>
    )
}


export default FavVideoCard;