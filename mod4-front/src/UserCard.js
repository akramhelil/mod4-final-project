import React, { Component } from 'react'
import UserLogin from './UserLogin';

const divStyle = {
    alignItems: "center"
}
export default class UserCard extends Component {

    render() {
        return (
            <div style={divStyle}>
                <UserLogin />
          </div>
    )
    }
}
