import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    function Tick(){
      return new Date().toLocaleTimeString();
    }

    var interval = setInterval(Tick, 1000);
    return (
      <div className="App">
        <header className="App-header">
          <h3>{Tick()}</h3>
        </header>
      </div>
    );
  }
}

export default App;
