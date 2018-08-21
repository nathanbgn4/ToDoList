import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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

class Header extends Component {
     render() {
          const { classes } = this.props;
          return(
               <AppBar position='static' className={classes.header}>
                    <Toolbar>
                         <Typography variant='title' className={classes.flex} color='inherit'>
                              Double ToDoList Demo
                         </Typography>
                         
                         <a href='/' className={classes.anchorButton}>
                              <Button variant='contained' color='secondary'>
                                   Home
                              </Button>
                         </a>

                         <a href='/todomui' className={classes.anchorButton}>
                              <Button variant='contained' color='secondary'>
                                   ToDo M-UI
                              </Button>
                         </a>
                    </Toolbar>
               </AppBar>
          );
     }
};

export default withStyles(styles)(Header);