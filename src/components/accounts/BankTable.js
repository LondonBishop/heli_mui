import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Format from '../../utils/Format';


const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
};

class BankTable extends Component {
  
  render () {
      
    const { classes, account } = this.props;

    return (
          <Paper className={classes.root}>
        
            <Table className={classes.table}>
             
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell align="left">Description</TableCell>
                  <TableCell align="right">Credit</TableCell>
                  <TableCell align="right">Debit</TableCell>
                  <TableCell align="right" style={ { fontWeight:"bold" } }>Balance</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                { account ? 
                 account.accountlines.map( dataRow => (
                        <TableRow>
                          <TableCell component="th" scope="row">{Format.formatDate(dataRow.date)}</TableCell>
                          <TableCell align="left">{dataRow.trans_desc}</TableCell>
                          {dataRow.transtype.ttype === "credit" ? <TableCell align="right">{Format.formatMoneyNoSymbol(dataRow.amount)}</TableCell> : <TableCell align="right"></TableCell>}
                          {dataRow.transtype.ttype === "debit" ? <TableCell align="right">{Format.formatMoneyNoSymbol(dataRow.amount)}</TableCell> : <TableCell align="right"></TableCell>}
                          <TableCell align="right" style={ { fontWeight:"bold" } }>{Format.formatMoneyNoSymbol(dataRow.balance)}</TableCell>
                        </TableRow>
                )) : null
                }
              </TableBody>

            </Table>
          </Paper>
    );
  }
}

BankTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BankTable);
