import React, { Component } from 'react';
import './App.css';

class App extends Component {
  formatHelloUser(fname, lname) {
    return 'Hello, ' + fname + ' ' + lname;
  }

  greetUser(user) {
    if (user) {
      var fname = user.firstName
      var lname = user.lastName

      return this.formatHelloUser(fname, lname);
    }

    return <div>No user found</div>
  }

   tick(){
    return <h3>{new Date().toLocaleTimeString()}</h3>
   }
   

  render() {
    var interval = setInterval(this.tick, 1000);

    var data = [
      { id: 1, name: 'pesho' },
      { id: 2, name: 'gosho' },
      { id: 3, name: 'minka' },
    ]
    var user = { firstName: 'Emil', lastName: 'Lekov' };
    var catsList = data.map(c => (
      <li key={c.id}>
        My name is {c.name}!
      </li>
    ))

    const h2Element = <h2 className="some-class">Some element</h2>
    return (
      <div>
        {h2Element} - {this.greetUser(user)}
        <ul>
          {catsList}
        </ul>
        {interval}
      </div>
    )
  }
}

export default App;
