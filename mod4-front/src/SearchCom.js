import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.query} style={{ fontSize: 25 }} type="text" placeholder="Search ..." />
                    <Button primary>Submit</Button>

                </form>
            </div>
        )
    }
}
