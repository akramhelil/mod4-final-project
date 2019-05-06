import React, { Component } from 'react'
import { Button, Form, Segment,Message, Menu} from 'semantic-ui-react'

export default class UserLogin extends Component {
    state = {
        name: '',
        password: ''
    }   
    
    // need to add password field to the back end
    inputHandler = (e) => {
        this.setState({
           [ e.target.name]: e.target.value
        })
        // switch (e.target.name) {
        //     case 'name':
        //     return this.setState({
        //         name: e.target.value
        //     })
        //     case 'password':
        //     return this.setState({
        //         password: e.target.value
        //     })
        //     default:
        // }
        // // console.log(e.target.value)
    }

    userLoginPost = () => {
        fetch('http://localhost:4000/users', {
        method: 'POST',
        headers:
        {'Content-Type': 'application/json', 'Accept': 'application/json'},
        body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(console.log)
    }
    
    // fetch for create user or lookup user 
    submitHandlerUser = (e) => {
        e.preventDefault()
        console.log("User Login Fetch Request", this.state)
        this.userLoginPost()
        // Dont know we should do front end Oauth or Back end Oauth
    }

    render() {
        // console.log(this.state)
        return (
            <Menu size="massive" vertical>
                <Segment inverted>
                    <Form onSubmit={this.submitHandlerUser}>
                         <Form.Input fluid label='Username'
                             placeholder='Username' name="name"
                            onChange={this.inputHandler} />
                        <Form.Input fluid label='Password'
                            placeholder='Password'
                            name="password" 
                            type="password"
                            onChange={this.inputHandler} />
                        <Message success
                            header='You all Set!'
                            content="Happy Browsing!!!" />
                        <Button  type='submit'>Login</Button>
                        &emsp;&emsp;

                        <Button>Signup</Button>
                    </Form>
                </Segment>
             </Menu>
        )
    }
}
