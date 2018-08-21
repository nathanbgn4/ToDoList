import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
     homeBoy: {
          textAlign: 'center',
          margin: '10px',
          color: 'white',
          background: '#222',
          fontSize: '2.5em'
     }
});

class Home extends Component {
     render(){
          return( 
               <div>
                    This is a demonstration of testing two separate ToDo lists. One uses Material-UI and the other uses
                    React-Redux.
               </div>
          );
     }
}

export default withStyles(styles)(Home);