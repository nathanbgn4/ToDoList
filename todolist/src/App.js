import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className='App-header'>
          <h1 className='App-title'>To-Do List</h1>
          <input className='InputBox'></input>
          <button className='Button'>Add</button>
        </header>
        <div className='ListArea'>
          <ul className='List'>
            <li>test item</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
