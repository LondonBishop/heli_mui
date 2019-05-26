import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import HeliTable from '../components/HeliTable';
import Format from '../components/Format';
import TopPageCard3 from '../components/TopPageCard3'



class HeliContainer extends Component {
   
  render () {  

    const { classes  } = this.props;

    return (
            <div>
                <Paper className={classes.root} elevation={1}>
                    <HeliTable accounts={this.props.bankAccounts} />

                    {/* <Divider variant="middle" style={ { margin: 25 } }/>
                    <Typography variant="h7" component="h3" >
                        Your total bills : {Format.formatMoneys(this.props.objNetWorth.totalBills +  this.props.objNetWorth.totalCreditCards)}
                    </Typography>
                    <Divider variant="middle" style={ { margin: 15 } }/>
                    <Typography variant="h7" component="h3">
                        Your net worth : {Format.formatMoneys( this.props.objNetWorth.totalNetWorthWithOutBills) }
                    </Typography>
                    <Divider variant="middle" style={ { margin: 15, backgroundColor:"orange"} }/>
                    <Typography variant="h7" component="h3">
                        Your Net Worth (inc bills and credit cards) :  { Format.formatMoneys(
                          (this.props.objNetWorth.totalNetWorthWithOutBills + 
                           this.props.objNetWorth.totalBills + 
                           this.props.objNetWorth.totalCreditCards).toFixed(2)) }
                    </Typography>
                   
                    <Divider variant="middle"  style={ { margin: 15, backgroundColor:"orange"} }/> */}
                    <TopPageCard3 objNetWorth={this.props.objNetWorth} />
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
      maxWidth : '85%',
    },
  });

export default withStyles(styles)(HeliContainer);