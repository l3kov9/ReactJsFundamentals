import React, { Component } from 'react'
import Data from './Data'

class Car extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cars: []
        }
    }

    componentDidMount(){
        Data
            .getCars()
            .then(c=>(
                this.setState({
                    cars: c
                })
            ))
    }

    render(){
        var cars = this.state.cars.map(c=>(
            <tr key={c.id}>
                <td>
                    {c.make}
                </td>
                <td>
                    {c.model}
                </td>
            </tr>
        ))

        return <table>{cars}</table>
    }
}

export default Car
