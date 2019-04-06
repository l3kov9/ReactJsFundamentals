import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.submitForm = this.submitForm.bind(this)
        this.changeName = this.changeName.bind(this)

        this.state = {
            user: {}
        }
    }

    submitForm() {

    }

    changeName(event) {
        const target = event.target
        var name = target.name
        var value = target.value
        if(name === 'firstName'){
            this.setState({
                user: {firstName:value}
            })
        }
        if(name === 'lastName'){
            this.setState({
                user: {lastName:value}
            })
        }
    }

    render() {
        return (
            <div>
                <input type='text' onChange={this.changeName} name='firstName' placeholder='First Name'>
                </input>
                <input type='text' onChange={this.changeName} name='lastName' placeholder='Last Name'>
                </input>
                <input type='submit' onClick={this.submitForm}></input>
            </div>
        )
    }
}

export default Form