import React, { Component } from 'react';
import './App.css';

class App extends Component {
  itemList=[];
  
  addItem(){
    this.itemList.push(document.getElementById('listInput').value);
    document.getElementById('listInput').value = '';
  }

  render() {
    return (
      <body className="App">
        <div className='App-header'>
          <form>
            <h1 className='App-title'>To-Do List</h1>
            <input type='text' className='InputBox'id='listInput' /><br />
            <button className='Button' onCLick={this.addItem}>Add Item</button>
            <button className='Button'>Clear List</button>
          </form>
        </div>
        <div className='ListArea'>
          <ul className='List'>
            <li>test item</li>
          </ul>
        </div>
      </body>
    );
  }
}

export default App;
