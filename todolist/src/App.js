import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  itemsList=[];
  
  addItem(e){
    this.itemsList.push(document.getElementById('listInput').value);
  }

  render() {

    const items = this.itemsList.map((item) => 
      <li>{item}</li>  
    );

    return (
      <div className="App">
        <div className='App-header'>
          <form>
            <h1 className='App-title'>To-Do List</h1>
            <input type='text' className='InputBox' id='listInput'/><br />
            <button className='Button' onClick={this.addItem}>Add Item</button>
            <button className='Button'>Clear List</button>
          </form>
        </div>
        <div className='ListArea'>
          <ul className='List'>
            {items}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
