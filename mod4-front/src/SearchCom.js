import React, { Component } from 'react'
import { Input, Form } from 'semantic-ui-react'

export default class SearchCom extends Component {
    state = {
        query: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.fetchVideos(this.state.query)
    }

    handleChange = (e) => {
        this.setState({
            query: e.target.value
        })
    }
    render() {
        // console.log(this.props)
        return (
          
            <Form onSubmit={this.handleSubmit}>
                    <Input  onChange={this.handleChange}
                        value={this.state.query} type="text"
                        placeholder="Search ..."
                        action={{ icon: 'search' }}
                        />
                    <br/>
                </Form>

        )
    }
}
