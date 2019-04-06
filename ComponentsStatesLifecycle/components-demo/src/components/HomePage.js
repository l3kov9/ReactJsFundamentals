import React, { Component } from 'react'
import Header from './Header'
import Clock from './Clock'
import Footer from './Footer'

class HomePage extends Component {
    constructor(props){
        super(props)

        this.state = {date: new Date()}
    }
    render() {
        return (
            <div>
                <Header menuItem = 'Fried chicken' />
                <Header menuItem = 'Grilled vegetables' />
                <Header menuItem = 'Row steaks' />
                <h1>Hello, Component</h1>
                <h1>It's <Clock /></h1>
                <Footer message = "Bye, noob" />
            </div>
        )
    }
}

export default HomePage