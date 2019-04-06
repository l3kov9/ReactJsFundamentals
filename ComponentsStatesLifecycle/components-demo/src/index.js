import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HomePage from './components/HomePage'
import Header from './components/Header'
import Car from './components/Car'
import * as serviceWorker from './serviceWorker';

const Greetings = (props) => (
    <div>
        <h3>{props.name}</h3>
        <h4>{props.age}</h4>
    </div>
)

ReactDOM.render(<Car />, document.getElementById('root'));

// ReactDOM.render(<Greetings name='Pesho' age = '12' />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<HomePage />, document.getElementById('root'));
// ReactDOM.render(<Header menuItem='pizzas' />, document.getElementById('menu'));
serviceWorker.unregister();
