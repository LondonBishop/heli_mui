import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Format from '../components/Format';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
   
  },
  table: {
    maxWidth: 700,
  },
};



class BillsTable extends Component {
  
  
  combineData = (bills, creditcards) => {


      let newData1 = bills.map ( bill => (
          { r1: bill.account_desc, 
            r2: Format.formatDate(bill.duedate), 
            r3: Format.formatMoneyNoSymbol((bill.accountlines[0].amount * -1).toFixed(2)),
            r4: bill.recurring
          }
      ))

      let newData2 = creditcards.map ( cc => (
        { r1: cc.account_desc, 
          r2: cc.duedate, 
          r3: Format.formatMoneyNoSymbol(cc.accountlines[0].balance),
          r4: ""
        }
    ))
    
    return [...newData1, ...newData2]

  }

  render () {
      
    const { classes, bills, creditCards } = this.props;

    return (
          <Paper className={classes.root}>
        
            <Table className={classes.table}>
             
              <TableHead>
                <TableRow>
                  <TableCell align="left">Company</TableCell>
                  <TableCell>Due Date</TableCell>
                  <TableCell align="right" style={ { fontWeight:"bold" } }>Amount</TableCell>
                  <TableCell align="left">How Often?</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                { this.combineData(bills, creditCards).map( dataRow => (
                    <TableRow>
                      <TableCell component="th" scope="row" align="left">{dataRow.r1}</TableCell>
                      <TableCell align="left">{dataRow.r2}</TableCell>
                      <TableCell align="right">{dataRow.r3}</TableCell>
                      <TableCell align="left">{dataRow.r4}</TableCell>
                  </TableRow> ))
                }
  
              </TableBody>

            </Table>
          </Paper>
    );
  }
}

BillsTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BillsTable);
