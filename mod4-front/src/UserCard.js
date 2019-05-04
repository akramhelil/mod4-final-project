import React, { Component } from 'react'
import UserLogin from './UserLogin';
import {Button, Segment, } from 'semantic-ui-react';

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
