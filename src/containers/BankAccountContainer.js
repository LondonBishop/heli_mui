import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
// import tileData from './tileData';
import TopPageCard2 from '../components/TopPageCard2'
import BankAccountTop from '../components/BankAccountTop'



// const tileData =[ {name: "Barclays", balance : "2,650.44"}, {name : "Citi", balance: "12.99"}, {name : "Halifax Saver", balance: "36,500.99"}]


class BankAccountContainer extends Component {

      state = {
        currentEntityType : "",
        currentEntityTypeData : [],
      }

// EVENT handlers **************************************************

      handleEditCard = (event) => {
        event.preventDefault();
        console.log ("event ---> edit card")
      }

      handleSelectCard = (event) => {
        event.preventDefault();
        console.log ("event ---> select card")
        this.switchBottomPageView();
      }


      switchBottomPageView = () => {

      }

// * CLASS ****************************************************************** 


      render() {

        const { classes, inBoundData } = this.props

        return (
          <div className={classes.root}>
              <BankAccountTop inBoundData ={ inBoundData }/>
          </div>
        );
      }
    }

// ************************************************************************

  const styles = theme => ({
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
      },
      // gridList: {
      //   flexWrap: 'nowrap',
      //   // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      //   transform: 'translateZ(0)',
      //   cols : 1
      // },
      // title: {
      //   color: theme.palette.primary.light,
      // },
      // titleBar: {
      //   background:
      //     'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
      // },
    });
    


BankAccountContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BankAccountContainer);