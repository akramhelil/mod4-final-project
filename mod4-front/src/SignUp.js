import React, { Component } from 'react';
import { Segment, Form, Message, Button } from 'semantic-ui-react'

const signupStyle = {
    marginTop: 150,
    marginLeft: 500,
    marginRight: 500,
    // alignItems: "center",
    textAlign: "center"
}

class SignUp extends Component {

    state = {
        name: '',
        photo: '',
        password: ''
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSignup = () => {
        const newUser = {
            photo: this.state.photo,
            name: this.state.name,
            password: this.state.password
        }
        fetch('http://localhost:4000/users', {
            method: 'POST',
            headers:
                { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(console.log)
    }


    render() {
        return (
            <div style={signupStyle}>
                <Segment inverted>
                    <h2>Signup Form</h2>
                    <Form onSubmit={this.handleSignup} >
                        <Form.Input onChange={this.onChange} fluid placeholder='Username' name="name" />
                        <Form.Input onChange={this.onChange} fluid placeholder='Photo Url' name="photo" />
                        <Form.Input onChange={this.onChange} fluid placeholder='Password' name="password" type="password" />
                        <Form.Input onChange={this.onChange} fluid placeholder='Confrim Password' name="password" type="password" />
                        <Message success header='You all Set!' content="Happy Browsing!!!" />
                        <Button type='submit'>Submit</Button>
                    </Form>
                </Segment>
            </div>
        );
    }
}

export default SignUp;