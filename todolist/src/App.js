import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import CssBaseline from '@material-ui/core/CssBaseline';
import { Button } from '@material-ui/core';

import Home from './routes/Home.js'
import ToDoMui from './routes/ToDoMui.js'

import Theme from './components/Theme.js';
import Header from './components/Header.js';

import Router from './Router.js';


class App extends Component {
  render() {

    return(
      <Theme>
        <CssBaseline />
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path='/' component={Home} />
            <Route path='/todomui' component={ToDoMui} />
          </Switch>
        </BrowserRouter>
      </Theme>
    );
  }
}

export default App;
