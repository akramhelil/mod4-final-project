import React, { Component } from 'react'
import { Button, Form, Segment, Message, Menu } from 'semantic-ui-react'
// import { Link } from 'react-router-dom' 

const loginStyle = {
    marginTop: 150,
    marginLeft: 500,
    marginRight: 500,
    // alignItems: "center",
    textAlign: "center"
}
export default class UserLogin extends Component {
    state = {
        name: '',
        password: ''
    }

    // need to add password field to the back end
    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    userLoginPost = () => {
        fetch('http://localhost:4000/login', {
            method: 'POST',
            headers:
            {
                'Content-Type': 'application/json', 'Accept': 'application/json'
                
            },
            body: JSON.stringify(this.state)
        })
            .then(res => res.json())
            .then(response => {
                if (response.errors) {
                    alert("Sign In Something Went Wrong") 
                } else {
                    this.props.setCurrentUser(response)
                }
            })
            this.props.history.push(`/`)
    }

    // fetch for create user or lookup user 
    submitHandlerUser = (e) => {
        e.preventDefault()
        this.userLoginPost()
    }

    render() {
        // console.log(this.state)
        return (
            <div style={loginStyle}>
            <Menu size="massive" vertical>
                <Segment inverted>
                    <Form onSubmit={this.submitHandlerUser}>
                        <Form.Input fluid
                            placeholder='Username' name="name"
                            onChange={this.inputHandler} />
                        <Form.Input fluid
                            placeholder='Password'
                            name="password"
                            type="password"
                            onChange={this.inputHandler} />
                        <Message success
                            header='You all Set!'
                            content="Happy Browsing!!!" />
                        <Button type='submit'>Login</Button>
                    </Form>
                </Segment>
            </Menu>
        </div>
        )
    }
}
