import React, { Component } from 'react'
import VideoCard from './VideoCard';
import { Card, Container } from 'semantic-ui-react';
export default class VideoDeck extends Component {

        
    render() {
        return (
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
        )
    }
}




  {/* <Iframe url={"https://www.youtube.com/embed/"+this.props.video.id.videoId}
                    frameBorder="5" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen={true} id={this.props.video.id}> title='videos'</Iframe> */}