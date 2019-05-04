import React, { Component } from 'react'
import VideoCard from './VideoCard';
import { Card, Container } from 'semantic-ui-react';
    

const dexStyle = {
    margin: 20,
    alignItems: "center"
}
export default class VideoDeck extends Component {
        
    render() {
        return (
         <div style={dexStyle}>
            <Container floated="right">   
                <Card.Group  itemsPerRow={3} >  
                {this.props.videos.map(video =>
                    <VideoCard
                    video={video}
                    key={video.id.videoId}
                    handleImageClick={this.props.handleImageClick}
                    />
                    )}
                </Card.Group>  
            </Container>   
         </div>
        )
    }
}




  {/* <Iframe url={"https://www.youtube.com/embed/"+this.props.video.id.videoId}
                    frameBorder="5" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen={true} id={this.props.video.id}> title='videos'</Iframe> */}