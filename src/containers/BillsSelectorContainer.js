import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import BillSelector from '../components/BillSelector'



class BillsSelectorContainer extends Component {
   
  render () {  

    const { classes, handleBillsDueChange } = this.props;

    return (
            <div>
                <Paper className={classes.root} elevation={1}>
                <Typography variant="h6" gutterBottom component="h2" style={{ marginTop : 5}}>
                    Payments coming up...
                </Typography>
                <BillSelector handleBillsDueChange={ handleBillsDueChange }/>
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
      width: '80%',
    },
  });

export default withStyles(styles)(BillsSelectorContainer);