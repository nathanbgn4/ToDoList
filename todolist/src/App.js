import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {value: '', empty: false, repeat: false};

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
    this.setState({value: '', empty: false, repeat: false});
  }

  addItem(e){
    e.preventDefault();
    let item = this.state.value;
    if(item.length > 0){
      if(this.itemsList.indexOf(item) === -1){
        this.setState({empty: false, repeat: false});  
        this.itemsList.push(item);
        this.setState({value: ''});
      } else {
        this.setState({repeat: true});
      }
    } else {
      this.setState({empty: true});
    }
  }

  render() {
    let itemKey = 0;

    const items = this.itemsList.map((item) => {
      return(<li key={itemKey += 1} className='ListItem'>{item} <button className='DeleteButton'>Delete</button></li>)
    });

    const emptyString = this.state.empty,
          repeatItem = this.state.repeat;

    return (
      <div className="App">
        <div className='App-header'>
          <h1 className='App-title'>To-Do List</h1>
          {emptyString && 
            <p className='Warning'>Please enter at least one character</p> 
          }
          {repeatItem &&
            <p className='Warning'>This item already exists</p>
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
