import React, { Component } from 'react';
import { Segment, Form, Message, Button } from 'semantic-ui-react'

class SignUp extends Component {
    render() {
        return (
            <div>
                Signup Form
               <Segment inverted>
                    <Form onSubmit={this.submitHandlerUser} >
                        <Form.Input fluid label='Username' placeholder='Username' name="name" />
                        <Form.Input fluid label='Password' placeholder='Password' name="password" />
                        <Form.Input fluid label='Confirm Password' placeholder='Password' name="password" />
                        <Message success header='You all Set!' content="Happy Browsing!!!" />
                        <Button type='submit'>Submit</Button>
                    </Form>
                </Segment>
            </div>
        );
    }
}

export default SignUp;