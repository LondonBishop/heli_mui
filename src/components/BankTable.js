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

// let id = 0;
// function createData(name, calories, fat, carbs, protein) {
//   id += 1;
//   return { id, name, calories, fat, carbs, protein };
// }

// const data = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// function GetCreditDebit (transIndicator, amount) {

//   if (transIndicator === "credit") {
//     return (<a><TableCell align="right">{amount}</TableCell>
//                  <TableCell align="right"></TableCell>   </a>
//             )
//   }

//   if (transIndicator === "credit") {
//     return (<a><TableCell align="right">{amount}</TableCell>
//                  <TableCell align="right"></TableCell>   
//             </a> )
//   } else {
//     return (<div><TableCell align="right"></TableCell>
//              <TableCell align="right">{amount}</TableCell> 
//             </div> )
//   }

// }


class BankTable extends Component {
  
  render () {
      
    const { classes, inBoundData } = this.props;

    return (
          <Paper className={classes.root}>
            <Table className={classes.table}>
             
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell align="right">Description</TableCell>
                  <TableCell align="right">Credit</TableCell>
                  <TableCell align="right">Debit</TableCell>
                  <TableCell align="right">Balance</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                { inBoundData[0].transactions.map( dataRow => (
                        <TableRow>
                          <TableCell component="th" scope="row">x</TableCell>
                          <TableCell align="right">0</TableCell>
                          <TableCell align="right">0</TableCell>
                          <TableCell align="right">0</TableCell>
                          <TableCell align="right">0</TableCell>
                        </TableRow>
                ))}
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
