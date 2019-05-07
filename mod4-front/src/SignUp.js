import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react'

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
        password: '',
        passwordConfirmation:''
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    createUser = () => {
        const newUser = {
            photo: this.state.photo,
            name: this.state.name,
            password: this.state.password
        }
        fetch('http://localhost:4000/users', {
            method: 'POST',
            headers:
                { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({user: newUser})
        })
            .then(res => res.json())
            .then((response) => {
                if (response.errors){
                    alert("Something went Wrong!")
                } else {
                   this.props.setCurrentUser(response)
                }
            }
        )
    }



    render() {
        return (
            <div style={signupStyle}>
                <Segment inverted>
                    <h2>Signup Form</h2>
                    <Form onSubmit={this.createUser} >
                        <Form.Input onChange={this.onChange} fluid placeholder='Username' name="name" />
                        <Form.Input onChange={this.onChange} fluid placeholder='Photo Url' name="photo" />
                        <Form.Input onChange={this.onChange} fluid placeholder='Password' name="password" type="password" />
                        <Form.Input onChange={this.onChange} fluid placeholder='Confrim Password' name="password_confirmation" type="password" />
                        <Button type='submit'>Submit</Button>
                    </Form>
                </Segment>
            </div>
        );
    }
}

export default SignUp;