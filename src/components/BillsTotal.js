import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function BillsTotal(props) {
  const { classes, billsTotal } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          You will need a total of £{ billsTotal }
        </Typography>
        {/* <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography> */}
      </Paper>
    </div>
  );
}

BillsTotal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BillsTotal);