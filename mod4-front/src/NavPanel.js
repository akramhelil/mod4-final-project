import React, { Component } from 'react'
import SearchCom from './SearchCom';
import {Container} from 'semantic-ui-react'
import UserLibrary from './UserLibrary';
import UserLogin from './UserLogin'
import SignUp from './SignUp';
import { Link, Route } from 'react-router-dom'



const searchStyle = {
    margin: 20,
    alignItems: "center",
    textAlign: "center"
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
                    </div>
                <hr/>
                    <br />
                    
                <SearchCom fetchVideos={this.props.fetchVideos} />
                </div>
                <div style={searchStyle}>
                 </div>
                    {this.props.currentUser ? 
                    <div>
                    <h2 style={searchStyle}> 
                    User Favorite Library
                     <hr />
                  </h2>
                     {this.props.userFav.slice(0, 5).map(video => <UserLibrary
                        key={video.id.videoId}
                        video={video}
                        style={searchStyle}
                        setCurrentUser={this.props.setCurrentUser}
                        />
                       )}
                    </div> :
                    <div style={searchStyle}>
                        <UserLogin
                            setCurrentUser={this.props.setCurrentUser} />
                    </div>
                    }
                    <Route path="/singup" render={<SignUp  setCurrentUser={this.props.setCurrentUser} />} />
                    <Link to="/signup">SignUp</Link>
                </Container>
            </React.Fragment>
        )
    }
}
