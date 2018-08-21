import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

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
                    <ToolBar>
                         <Typography variant='title' className={classes.flex} color='inherit'>
                              Double ToDoList Demo
                         </Typography>
                         
                         <a className={classes.anchorButton}>
                              <Button variant='contained' color='secondary'>
                                   Home
                              </Button>
                         </a>

                         <a component={Link} to='/ToDoMui' className={classes.anchorButton}>
                              <Button variant='contained' color='secondary'>
                                   ToDo M-UI
                              </Button>
                         </a>

                    </ToolBar>
               </AppBar>
          );
     }
};

export default withStyles(styles)(Header);