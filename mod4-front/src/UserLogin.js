import React, { Component } from 'react'
import { Button, Form, Segment,Message, Menu} from 'semantic-ui-react'

export default class UserLogin extends Component {
    stae = {
        username: '',
        password: ''
    }   

    // fetch for create user or lookup user 
    


    render() {
        return (
            <Menu size="massive" vertical  >
                <Segment inverted>
                <Form onSubmit={this.submitHandlerUser} >
                    <Form.Input  fluid label='Username' placeholder='Username' name="name" />
                    <Form.Input  fluid label='Password' placeholder='Password' name="password" />
                    <Message success header='You all Set!' content="Happy Browsing!!!" />
                <Button   type='submit'>Login</Button>
                <Button   type='submit'>Signup</Button>
                </Form>
                </Segment>
                </Menu>
        
        )
    }
}
