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
    width: '80%',
    // overflowX: 'auto',
  },
  table: {
    width: '100%',
    // boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)',
    // border: '14px',
  },
};


class BillsTable extends Component {
  

  render () {
      
    const { classes, combinedData } = this.props;

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
                { combinedData.map( dataRow => (
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
