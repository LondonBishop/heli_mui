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
    maxWidth: 700,
  },
};


class BillsTable extends Component {
  
  render () {
      
    const { classes, Bills } = this.props;

    return (
          <Paper className={classes.root}>
        
            <Table className={classes.table}>
             
              <TableHead>
                <TableRow>
                  <TableCell>Due Date</TableCell>
                  <TableCell align="left">Description</TableCell>
                  <TableCell align="left" style={ { fontWeight:"bold" } }>Amount</TableCell>
                  <TableCell align="left">How Often?</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                { Bills ? 
                 Bills.map( dataRow => (
                        <TableRow>
                          <TableCell component="th" scope="row">{dataRow.transactions[0].duedate}</TableCell>
                          <TableCell align="left">{dataRow.account_desc}</TableCell>
                          <TableCell align="left">{dataRow.transactions[0].amount}</TableCell>
                          <TableCell align="left">{dataRow.transactions[0].recurring}</TableCell>
                        </TableRow>
                )) : null
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
