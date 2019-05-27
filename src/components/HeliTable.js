import React, { Component, Image } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon'
import AssignmentReturned from '@material-ui/icons/AssignmentReturned';
import TrendingDownOutlined from '@material-ui/icons/TrendingDownOutlined'
import TrendingUpOutlined from '@material-ui/icons/TrendingUpOutlined'
import Mood from '@material-ui/icons/Mood';
import SentimentDissatisfiedRounded from '@material-ui/icons/SentimentDissatisfiedRounded';
import Format from '../components/Format';


const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
};

class HeliTable extends Component {
  
  render () {
      
    const { classes, accounts } = this.props;

    return (
          <Paper className={classes.root}>
        
            <Table className={classes.table}>
             
              <TableHead>
                <TableRow>
                  <TableCell>Account</TableCell>
                  <TableCell align="right">Start Balance</TableCell>
                  <TableCell align="right">End Balance</TableCell>
                  <TableCell align="right">Indicator</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                { accounts ? 
                 accounts.map( dataRow => (
                        <TableRow>
                          <TableCell component="th" scope="row">{dataRow.account_desc}</TableCell>
                          <TableCell align="right" style={ { fontWeight:"bold" } }>{Format.formatMoneyNoSymbol(dataRow.accountlines[dataRow.accountlines.length -1 ].balance)}</TableCell>
                          <TableCell align="right" style={ { fontWeight:"bold" } }>{Format.formatMoneyNoSymbol(dataRow.accountlines[0].balance)}</TableCell>
                          {dataRow.balanceIndicator === "up" ? <TableCell align="right"><Icon><Mood/><TrendingUpOutlined/></Icon></TableCell> : null}
                          {dataRow.balanceIndicator === "down" ? <TableCell align="right"><Icon><SentimentDissatisfiedRounded /><TrendingDownOutlined /></Icon></TableCell> : null}
                        </TableRow>
                )) : null
                }
              </TableBody>

            </Table>
          </Paper>
    );
  }
}

HeliTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeliTable);
