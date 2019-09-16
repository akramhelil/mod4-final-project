import React from 'react'
import VideoCard from './VideoCard';
import { Card, Container } from 'semantic-ui-react';
    

const dexStyle = {
    margin: 20,
    alignItems: "center"
}
function VideoDeck(props) {

    return (
        <div style={dexStyle}>
        <Container floated="right">   
            <Card.Group  itemsPerRow={3} >  
            {props.videos.map(video =>
                <VideoCard
                    video={video}
                    key={video.id.videoId}
                    addToFav={props.addToFav}
                    currentUser={props.currentUser}
                    />
                )}
            </Card.Group>  
        </Container>   
        </div>
    )
}

export default VideoDeck



 