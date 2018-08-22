import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import {Link, BrowserRouter} from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
   header: {
        flexGrow: 1
   },
   flex: {
        flex: 1
   },
   anchorButton: {
        margin: theme.spacing.unit,
        textDecoration: 'none'
   }
});

function refreshPage() {
     window.location.reload();
}

class Header extends Component {

     render() {
          const { classes } = this.props;
          return(
               <BrowserRouter>
               <AppBar position='static' className={classes.header}>
                    <Toolbar>
                         <Typography variant='title' className={classes.flex} color='inherit'>
                              Double ToDoList Demo
                         </Typography>
                         
                         <Button className={classes.anchorButton} onClick={refreshPage} component={Link} to='/' variant='contained' color='secondary'>
                              Home
                         </Button>
                         
                         <Button className={classes.anchorButton} onClick={refreshPage} component={Link} to='/todomui' variant='contained' color='secondary'>
                              ToDo M-UI
                         </Button>
                    </Toolbar>
               </AppBar>
               </BrowserRouter>
          );
     }
};

export default withStyles(styles)(Header);