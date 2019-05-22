import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import HeliTable from '../components/HeliTable';



class HeliContainer extends Component {
   
  render () {  

    const { classes } = this.props;

    return (
            <div>
                <Paper className={classes.root} elevation={1}>
                    <HeliTable accounts={this.props.bankAccounts} />

                    <Divider variant="middle" style={ { marginTop: 35 } }/>
                    <Typography variant="h5" component="h3">
                        Your total bills : £ { this.props.objNetWorth.totalBills }
                    </Typography>
                    <Divider variant="middle" style={ { marginTop: 15 } }/>
                    <Typography variant="h5" component="h3">
                        Your net worth : £ { this.props.objNetWorth.totalNetWorthWithOutBills }
                    </Typography>
                    <Divider variant="middle" style={ { marginBottom: 15 } }/>
                    <Typography variant="h5" component="h3">
                        Your net worth (inc bills and credit cards) : £ { this.props.objNetWorth.totalNetWorthWithBills }
                    </Typography>
                   
                    <Divider variant="middle" style={ { marginTop: 15 } }/>
                </Paper>
            </div>
         );
    }
}


HeliContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
  });

export default withStyles(styles)(HeliContainer);