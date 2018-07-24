import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  
  itemsList=[];

  handleChange(e){
    this.setState({value: e.target.value});
  }
  
  addItem(e){
    this.itemsList.push(this.state.value);
    this.setState({value: ''});
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
            <input type='text' className='InputBox'id='listInput' value={this.state.value} onChange={this.handleChange}/><br />
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
