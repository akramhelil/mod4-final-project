import React, { Component } from 'react'
import UserLogin from './UserLogin';

export default class UserCard extends Component {
    render() {
        return (
            <div>
                <h1>
                    <UserLogin />
                </h1>
            </div>
        )
    }
}
