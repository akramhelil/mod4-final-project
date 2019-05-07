import React, { Component } from 'react';
import FavVideoCard from './FavVideoCard';
import { Card,Container } from 'semantic-ui-react';


const dexStyle = {
    margin: 20,
    alignItems: "center"
}
class FavVideo extends Component {


    render() {
        console.log(this.props)
        return (
         <div>
             <div style={dexStyle}>
            <Container floated="right">   
                <Card.Group  itemsPerRow={3} >  
                {this.props.currentUser.videos.map(video =>
                    <FavVideoCard
                        video={video}
                        key={video.id}
                        />
                    )}
                </Card.Group>  
            </Container>   
         </div>
    </div>
        );
    }
}

export default FavVideo;