import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {value: '', valid: true};

    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.clearList = this.clearList.bind(this);
  }
  
  itemsList=[];

  handleChange(e){
    this.setState({value: e.target.value});
  }
  
  clearList(e){
    e.preventDefault();
    this.itemsList = [];
    this.setState({value: '', valid: true});
  }

  addItem(e){
    e.preventDefault();
    let item = this.state.value;
    this.validateItem(item);
    if(this.state.valid){  
      this.itemsList.push(item);
      this.setState({value: ''});
    }
  }

  validateItem(item){
    if(item.length <= 0){
      this.setState({valid: false});
    }
  }

  render() {
    let itemKey = 0;

    const items = this.itemsList.map((item) => {
      return(<li key={itemKey += 1}>{item}</li>)
    });

    const warning = this.state.valid;

    return (
      <div className="App">
        <div className='App-header'>
          <h1 className='App-title'>To-Do List</h1>
          {!warning && 
            <p className='Warning'>Please enter at least one character</p>
          }
          <form>
            <input type='text' className='InputBox'id='listInput' value={this.state.value} onChange={this.handleChange}/><br />
            <button className='Button' onClick={this.addItem}>Add Item</button>
            <button className='Button' onClick={this.clearList}>Clear List</button>
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
