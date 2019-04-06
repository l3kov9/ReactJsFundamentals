import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div>
                <h2>Footer:</h2>
                <h4>Final message: {this.props.message}</h4>
            </div>
        )
    }
}

export default Footer
