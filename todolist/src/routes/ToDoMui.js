import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const styles = theme => ({
  App: {
    textAlign: 'center',
    background: '#222',
    height: '100%',
    marginBottom: '0px'
  },
  AppHeader: {
    backgroundColor: 'black',
    height: 'auto',
    padding: '20px',
    color: 'white',
    textShadow: '2px 2px gray'
  },
  AppTitle: {
    fontSize: '2.5em'
  },
  Warning: {
    color: 'red',
    fontSize: '16px',
    textAlign: 'center',
    textShadow: 'none'
  },
  InputBox: {
    width: '300px',
    height: '25px',
    borderRadius: '5px',
    borderColor: 'darkgrey',
    borderWidth: '2px',
    fontSize: '16px',
    marginBottom: '5px'
  },
  listArea: {
    display: 'inline-block',
    marginRight: '35px'
  },
  listItem: {
    textAlign: 'center', 
    marginLeft: '120px',
    marginTop: '15px'
  },
  list: {
    color: 'white',
    fontSize: '1.5em',
    listStyle: 'none'
  },
  todoButtons: {
    margin: '5px',
    display: 'inline-block'
  },
  deleteButtons: {
    float: 'right',
    marginLeft: '70px'
  }
});

class ToDoMui extends Component {
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
    const {classes} = this.props;
    const items = this.itemsList.map((item) => {
      return(<li key={this.itemsList.indexOf(item)} className={classes.listItem}>{item}<Button id='deleteButton' variant='contained' color='secondary' className={classes.deleteButtons} onClick={this.deleteItem.bind(this, item)}>Delete</Button></li>)
    });

    const emptyString = this.state.empty,
          repeatItem = this.state.repeat;

    return (
      <div className={classes.App}>
        <div className={classes.AppHeader}>
          <h1 className={classes.AppHeader}>To-Do List</h1>
          {emptyString && 
            <p className={classes.Warning} id='emptyWarn'>Please enter at least one character</p> 
          }
          {repeatItem &&
            <p className={classes.Warning} id='repeatWarn'>This item already exists</p>
          }
          <form>
            <input type='text' className={classes.InputBox} id='listInput' value={this.state.value} onChange={this.handleChange}/><br />
            <Button className={classes.todoButtons} onClick={this.addItem} id='addButton' variant='contained' color='secondary'>Add Item</Button>
            <Button className={classes.todoButtons} onClick={this.clearList} id='clearButton' variant='contained' color='secondary'>Clear List</Button>
          </form>
        </div>
        <div className={classes.listArea}>
          <ul className={classes.list}>
            {items}
          </ul>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(ToDoMui);