import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.headerClicked = this.headerClicked.bind(this)
    this.changeInput = this.changeInput.bind(this)
  }

  headerClicked(event){
    window.alert('CLICKED!!!')
    console.log(event)
    console.log(event.target)
  }

  changeInput(event){
    const target = event.target
    let field = target.name
    let value = target.value
    console.log(field)
    console.log(value)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 onClick={this.headerClicked}>CLICK ME!!!!!!!!!!!!!!!!!</h1>
          <input type="text" name='someInput' onChange = {this.changeInput}></input>
        </header>
      </div>
    );
  }
}

export default App;
