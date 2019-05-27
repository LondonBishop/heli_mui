import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import IconButton from '@material-ui/core/IconButton';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
// import tileData from './tileData';
import TopPageCard2 from './TopPageCard2'
import Paper from '@material-ui/core/Paper'



class BankAccountTop extends Component {

      render() {

        const { classes, BankAccounts, handleSelectCard, handleEditCard  } = this.props

        return (

          <Paper className={classes.root}>

              <Grid container spacing={24} style ={ { padding:24 } }>
                  {BankAccounts.map( account  => (
                      <Grid className={classes.gridList} >
                          <TopPageCard2 account={ account } handleEditCard={ handleEditCard } handleSelectCard={ handleSelectCard } />
                      </Grid> ) ) }
              </Grid>

          </Paper>
        );
      }
    }


  const styles = theme => ({
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
      
      },
      gridList: {
        display :'inline-flex',
        flexWrap: 'wrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
        cols : 1,
        marginRight : '30px'
        
      },
      title: {
        color: theme.palette.primary.light,
      },
      titleBar: {
        background:
          'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
      },
    });
    

BankAccountTop.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BankAccountTop);