import React, { Component } from 'react'

export default class UserLogin extends Component {
    render() {
        return (
            <div>
                <form>  
                    <input type="text" placeholder="Enter Username" name="uname" required></input>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}
