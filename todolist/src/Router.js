import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import Home from './routes/Home.js'
import ToDoMui from './routes/ToDoMui.js'

class Router extends Component{
     render() {
          return(
              <div>
              <BrowserRouter>
                    <Switch>
                         <Route path='/' component={Home} />
                         <Route path='/todomui' component={ToDoMui} />
                    </Switch>
              </BrowserRouter>
              </div>
          );
        }
};

export default () => <Router />;