import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BankAccountTop from '../components/accounts/BankAccountTop';
import BankTable from '../components/accounts/BankTable';
import Paper from '@material-ui/core/Paper';
import HeliChart from '../components/heli/HeliChart';


class CreditCardContainer extends Component {

  
    componentDidMount() {
      this.setState ({
        selectedAccount : this.props.creditCards[0]
      })
    }
    
    

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


  
    setCardColor = (creditCards, selectedAccount) => {

        creditCards.forEach ( cc => {
          const resetCard = document.getElementById("CARD" + cc.id)
          if (resetCard) {
            if (resetCard.id !== cc.id) {
                resetCard.style.backgroundColor = "#eaeaea"
            }
          }
      });

        let selectedCard = document.getElementById("CARD" + selectedAccount.id)
        if (selectedCard) {
            selectedCard.style.backgroundColor = "#fcae3c"
        }

      }
      


// * CLASS ****************************************************************** 

      render() {

        const { classes, creditCards, selectedAccount, handleSelectedAccount } = this.props
        
        
        
        return (
                <div className={classes.root}>
                    <Paper className={classes.gridList}>
                        <BankAccountTop BankAccounts ={ creditCards }  handleSelectCard={ handleSelectedAccount } handleEditCard={ this.handleEditCard }/>
                    </Paper>
        
                    <div className={classes.table}>
                        { this.setCardColor( creditCards, selectedAccount) }
                        <BankTable account={ selectedAccount } /> 
                    </div>   

                    <Paper className={ classes.hchart }>
                      <HeliChart />
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
        // backgroundColor: theme.palette.background.paper,
        backgroundColor: '#fafafa',
        padding:'0em 1em 4em 1em',
      },
      gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
        cols : 1,
        width : '78%',
        marginTop : '25px',
      }, 

      table : {
          // marginTop : 10, 
          // marginBottom : 10,
          // maxWidth : '80%',
          marginTop: '2em',
          // margin : '4em, 1em, 1em, 1em',
      },

      hchart : {
        width : 375, 
        height: 375,
        margin : '30px',
      }
    });
    


    CreditCardContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreditCardContainer);