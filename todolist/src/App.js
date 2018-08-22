import React, { Component } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import Theme from './components/Theme.js';
import Header from './components/Header.js';

import Router from './Router.js';



class App extends Component {
  render() {

    return(
      <Theme>
        <CssBaseline />
        <Header />
        <Router />
      </Theme>
    );
  }
}

export default App;
