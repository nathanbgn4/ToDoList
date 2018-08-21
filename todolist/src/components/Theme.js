import React, { Component } from 'react';
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import blueGrey from '@material-ui/core/colors/blueGrey'

const theme = createMuiTheme({
     palette: {
          primary: {
               main: blueGrey[900],
               ligh: blueGrey[500],
               dark: blueGrey[900],
               contrastText: '#fff'
          },
          secondary: {
               main: red[900],
               light: red[500],
               dark: red[900],
               contrastText: '#fff'
          }
     }
});

class Theme extends Component {
     render() {
          return(
               <MuiThemeProvider theme={theme}>{this.props.children}</MuiThemeProvider>
          );
     }
}

export default Theme;