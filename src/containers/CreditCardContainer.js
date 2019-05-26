import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BankAccountTop from '../components/BankAccountTop'
import BankTable from '../components/BankTable'
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper'


class CreditCardContainer extends Component {

    // state ={
    //     selectedAccount : "",
    // }
  

    // setDefaultAccount = () => {
    //   if (this.props.bankAccounts) {
    //     this.setState({
    //       selectedAccount : this.props.bankAccounts[0]
    //     })
    //   }
    // }


    // static getDerivedStateFromProps(props, state){
      
    //     if (props.bankAccounts[0] !== state.selectedAccount) {
    //       return {selectedAccount: state.selectedAccount }
    //     } else return null
      
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

        const { classes, creditCards, selectedAccount, handleSelectedAccount } = this.props

        return (
                <div className={classes.root}>
                    <Paper className={classes.gridList}>
                        <BankAccountTop BankAccounts ={ creditCards }  handleSelectCard={ handleSelectedAccount } handleEditCard={ this.handleEditCard }/>
                    </Paper>
        
                    <Paper className={classes.table}>
                            <BankTable account={ selectedAccount } /> 
                    </Paper>    
                </div>
        );
      }
    }

// ************************************************************************

  const styles = theme => ({
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        // justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
      },
      gridList: {
        flexWrap: 'wrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
        cols : 1,
        width : '100%',
      }, 

      table : {
          marginTop : 10, 
          marginBottom : 10,
          maxWidth : '80%'
      }
    });
    


    CreditCardContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreditCardContainer);