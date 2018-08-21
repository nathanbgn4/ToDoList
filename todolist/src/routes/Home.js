import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
     homeBoy: {
          textAlign: 'center',
          color: 'white',
          background: '#222',
          fontSize: '2.5em',
          height: 'auto',
          width: 'auto',
          marginBottom: '0px'
     }
});

class Home extends Component {
     render(){
          const {classes} = this.props;
          return( 
               <div className={classes.homeBoy}>
                    This is a demonstration of testing two separate ToDo lists. One uses Material-UI and the other uses
                    React-Redux.
               </div>
          );
     }
}

export default withStyles(styles)(Home);