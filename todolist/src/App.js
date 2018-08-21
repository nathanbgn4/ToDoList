import React, { Component } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { Button } from '@material-ui/core';

import Theme from './components/Theme.js';
import Header from './components/Header.js';

import Router from './Router.js';


class App extends Component {
  render() {

    return(
      <Theme>
        <CssBaseline />
        <Header />
      </Theme>
    );
  }
}

export default App;
