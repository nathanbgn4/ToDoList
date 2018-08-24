import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Home from './routes/Home.js'
import Styled from './routes/ToDoMui.js'
import ToDoRedux from './routes/ToDoRedux.js'

class Router extends Component{
     render() {
          return(
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/todomui' component={Styled} />
                <Route path='/todoredux' component={ToDoRedux} />
            </Switch>
          );
        }
};

export default () => <Router />;