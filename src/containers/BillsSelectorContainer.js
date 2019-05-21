import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import BillSelector from '../components/BillSelector'



class BillsSelectorContainer extends Component {
   
  render () {  

    const { classes } = this.props;

    return (
            <div>
                <Paper className={classes.root} elevation={1}>
                <BillSelector />
                </Paper>
            </div>
         );
    }
}


BillsSelectorContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
  });

export default withStyles(styles)(BillsSelectorContainer);