import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
                  <TableCell align="right">Balance</TableCell>
                  <TableCell align="right">Indicator</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                { accounts ? 
                 accounts.map( dataRow => (
                        <TableRow>
                          <TableCell component="th" scope="row">{dataRow.account_desc}</TableCell>
                          <TableCell align="right" style={ { fontWeight:"bold" } }>{dataRow.transactions[0].balance}</TableCell>
                          <TableCell align="right" style={ { fontWeight:"bold" } }>{dataRow.balanceIndicator}</TableCell>
                          {/* {dataRow.transtype === "up" ? <TableCell align="right"></TableCell> : <TableCell align="right"></TableCell>}
                          {dataRow.transtype === "down" ? <TableCell align="right">{dataRow.amount}</TableCell> : <TableCell align="right"></TableCell>} */}
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
