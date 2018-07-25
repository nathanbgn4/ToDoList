import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {value: '', empty: false, repeat: false};

    this.handleChange   = this.handleChange.bind(this);
    this.addItem        = this.addItem.bind(this);
    this.clearList      = this.clearList.bind(this);
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

  deleteItem(item){
    let deleteMe = this.itemsList.indexOf(item)
    if(deleteMe > -1){
      this.itemsList.splice(deleteMe, 1);
      this.forceUpdate();
    }
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
        this.setState({empty: false, repeat: true});
      }
    } else {
      this.setState({empty: true});
    }
  }

  render() {

    const items = this.itemsList.map((item) => {
      return(<li key={this.itemsList.indexOf(item)} className='ListItem'>{item}<button id='deleteButton' className='DeleteButton' onClick={this.deleteItem.bind(this, item)}>Delete</button></li>)
    });

    const emptyString = this.state.empty,
          repeatItem = this.state.repeat;

    return (
      <div className="App">
        <div className='App-header'>
          <h1 className='App-title'>To-Do List</h1>
          {emptyString && 
            <p className='Warning' id='emptyWarn'>Please enter at least one character</p> 
          }
          {repeatItem &&
            <p className='Warning' id='repeatWarn'>This item already exists</p>
          }
          <form>
            <input type='text' className='InputBox'id='listInput' value={this.state.value} onChange={this.handleChange}/><br />
            <button className='Button' onClick={this.addItem} id='addButton'>Add Item</button>
            <button className='Button' onClick={this.clearList} id='clearButton'>Clear List</button>
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
