import React, { Component } from 'react'
import { Button, Form, Segment,Message, Menu, Container} from 'semantic-ui-react'

export default class UserLogin extends Component {
    // fetch for create user or lookup user 
    render() {
        return (
                  
            <Menu size="massive" vertical  >
                <Segment inverted>
                <Form inverted >
                    <Form.Input  fluid label='Username' placeholder='Username' />
                    <Form.Input  fluid label='Password' placeholder='Password' />
                    <Message success header='You all Set!' content="Happy Browsing!!!" />
                <Button  type='submit'>Submit</Button>
                </Form>
                </Segment>
                </Menu>
        
        )
    }
}
