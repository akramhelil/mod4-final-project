import React, { Component } from 'react'
import SearchCom from './SearchCom';
import {Container, Button, Segment} from 'semantic-ui-react'
import UserLibrary from './UserLibrary';

import { Link } from 'react-router-dom'

const searchStyle = {
    margin: 20,
    alignItems: "center",
    textAlign: "center"
}

const button = {
    margin: 50,
    alignItems: "center",
    textAlign: "center",
}


export default class NavPanel extends Component {
    render() {
        return (
            <React.Fragment>
            <Container >   
                <div style={searchStyle}>
                    <div>
                        <img src="./logo.png"
                                alt="logo" width="150" height="150" />
                            <h1>Tuberary</h1>
                    </div>
                <hr/>
                    <br />
                    
                <SearchCom fetchVideos={this.props.fetchVideos} />
                </div>
                <div style={searchStyle}>
                 </div>
                    {this.props.currentUser ?
                        <div>
                           <Segment textAlign="center">
                            <h2>Welcome Back {this.props.currentUser.name}!!</h2>
                            <br/>
                            <img
                                src={this.props.currentUser.photo}
                                alt="pforile"
                                height="100"
                                width="100"
                                 />
                            <br />
                            <React.Fragment>
                            <Button  secondary >
                                <Link to="/favorites" style={{ color: '#FFF' }}>Favorites</Link>
                            </Button>    
                            <Button  secondary style={button}>
                                <Link to="/videos" style={{ color: '#FFF' }}>Videos</Link>
                                </Button>  
                            </React.Fragment>    
                         </Segment>
                    <h2 style={searchStyle}> 
                    Recommened Videos
                     <hr />
                    </h2>
                     {this.props.userFav.slice(0, 5).map(video => <UserLibrary
                        key={video.id.videoId}
                        video={video}
                         style={searchStyle}
                         addToFav={this.addToFav}
                        setCurrentUser={this.props.setCurrentUser}
                        />
                       )}
                        </div> :
                        <React.Fragment>
                            <Button secondary  style={button}>
                             <Link to="/signup" style={{ color: '#FFF' }} >Sign Up</Link>
                            </Button>
                            <Button  secondary  style={button}>      
                                <Link to="/login" style={{ color: '#FFF' }} >Log In</Link>
                            </Button>
                        </React.Fragment>
                    // <div style={searchStyle}>
                    //     <UserLogin
                    //         setCurrentUser={this.props.setCurrentUser} />
                    // </div>
                    }
                  
                </Container>
            </React.Fragment>
        )
    }
}
