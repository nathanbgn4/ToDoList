import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import Home from './routes/Home.js'

class Router extends Component{
     render() {
          return(
              <BrowserRouter>
                    <Switch>
                         <Route path='/' component={Home} />
                    </Switch>
              </BrowserRouter>
          );
        }
};

export default () => <Router />;