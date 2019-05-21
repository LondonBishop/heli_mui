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
import SimpleTable from '../components/SimpleTable'
import BankTable from '../components/BankTable'
import Divider from '@material-ui/core/Divider';


// const tileData =[ {name: "Barclays", balance : "2,650.44"}, {name : "Citi", balance: "12.99"}, {name : "Halifax Saver", balance: "36,500.99"}]

class BankAccountContainer extends Component {


  constructor (props) {
        super(props);

        this.state ={
            selectedAccount : "",
        };
    }

    setDefaultAccount = () => {
      if (this.props.BankAccounts) {
        this.setState({
          selectedAccount : this.props.BankAccounts[0]
        })
      }
    }

    componentDidMount () {
    
    }

    static getDerivedStateFromProps(props, state){
      
        if (props.BankAccounts[0] !== state.selectedAccount) {
          return {selectedAccount: state.selectedAccount }
        } else return null
      
    }
  
    
    // static getDerivedStateFromProps(props, state) {
    //   return {
    //     state.selectedBankId: props.inBoundData[0].id,
    //     state.selectedBankTransactions : props.inBoundData[0].transactions,  
    //   }
    // }


// EVENT handlers **************************************************

      handleEditCard = (event) => {
        event.preventDefault();
        console.log ("event ---> edit card")
      }

      handleSelectCard = (event, account) => {
        
        event.preventDefault();
        console.log ("event ---> select card")


        this.setState ( { 
          selectedAccount : account
         });
      }


      switchBottomPageView = () => {
      }


      


// * CLASS ****************************************************************** 

      render() {

        const { classes, BankAccounts } = this.props
        
        console.log ("Bank Account Container ")
        
        return (

          <div className={classes.root}>
              <div className={classes.gridList}>
                  <BankAccountTop BankAccounts ={ BankAccounts }  handleSelectCard={ this.handleSelectCard } handleEditCard={ this.handleEditCard }/>
              </div>
              <Divider variant="middle" style={ { marginTop : 45 } }/>
              {/* <BottomData firstTimeInFlag={firstTimeInFlag} /> */}
             
              {/* {  !inBoundData[0] && this.state.selectedBankId ? 
                  null
                  : 
                  <div className={classes.tableContainer}>
                      <BankTable inBoundData={ inBoundData[0].transactions } />
                  </div>
              } */}

              {/* { 
                inBoundData[0]
                ? 
                <div className={classes.tableContainer}>
                  <BankTable inBoundData={ inBoundData[0].transactions } />
                </div>
                : null
              }
                //  */}
        
                {/* <BankTable inBoundData={ this.state.account } /> */}
            { this.state.selectedAccount ?
                 <BankTable account={ this.state.selectedAccount } />: null }
                  {/* <BankTable account={""}/>}  */}
              {/* {<BankTable inBoundData={ this.state.account } />} */}
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
      gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
        cols : 1
      },
      title: {
        color: theme.palette.primary.light,
      },
      titleBar: {
        background:
          'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
      },
    });
    


BankAccountContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BankAccountContainer);