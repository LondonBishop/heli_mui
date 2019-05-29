import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Format from '../../utils/Format';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width : '80%',
    marginTop : '15px',
  },
});

function BillsTotal(props) {
  const { classes, totalBills } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1} style={{ backgroundColor : "orange" }}>
        <Typography variant="h5" component="h3">
          You will need a total of { Format.formatMoneys( totalBills * -1) }
        </Typography>
      </Paper>
    </div>
  );
}

BillsTotal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BillsTotal);