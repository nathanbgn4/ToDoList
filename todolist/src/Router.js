import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './routes/Home.js'
import ToDoMui from './routes/ToDoMui.js'

class Router extends Component{
     render() {
          return(
              <BrowserRouter>
                    <Switch>
                         <Route exact path='/' component={Home} />
                         <Route path='/todomui' component={ToDoMui} />
                    </Switch>
              </BrowserRouter>
          );
        }
};

export default () => <Router />;