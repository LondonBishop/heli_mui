import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BankAccountTop from '../components/BankAccountTop'
import BankTable from '../components/BankTable'
import Paper from '@material-ui/core/Paper';

class BankAccountContainer extends Component {


  constructor (props) {
        super(props);

        this.state ={
            selectedAccount : "",
        };
    }

    setDefaultAccount = () => {
      if (this.props.bankAccounts) {
        this.setState({
          selectedAccount : this.props.bankAccounts[0]
        })
      }
    }



    static getDerivedStateFromProps(props, state){
      
        if (props.bankAccounts[0] !== state.selectedAccount) {
          return {selectedAccount: state.selectedAccount }
        } else return null
      
    }
  
    

// EVENT handlers **************************************************

      handleEditCard = (event) => {
        event.preventDefault();
        console.log ("event ---> edit card")
      }

      handleSelectCard = (event, account) => {
        
        event.preventDefault();

        this.props.bankAccounts.forEach ( bankAcc => {
          const resetCard = document.getElementById("CARD" + bankAcc.id)
          if (resetCard.id !== account.id) {
              resetCard.style.backgroundColor = "#eaeaea"
          }
      });

        let selectedCard = document.getElementById("CARD" + account.id)
        selectedCard.style.backgroundColor = "#fcae3c"
        
        this.setState ({
          selectedAccount : account
        })
      }

      


// * CLASS ****************************************************************** 

      render() {

        const { classes, bankAccounts } = this.props
      
        
        return (

          <div >
            <div className={classes.root}>
              <Paper >
                  <BankAccountTop BankAccounts ={ bankAccounts }  handleSelectCard={ this.handleSelectCard } handleEditCard={ this.handleEditCard }/>
              </Paper>
              </div>

              {/* <Divider variant="middle" style={ { marginTop : 45 } }/> */}
              <div className={classes.root}>
              <Paper>
              { this.state.selectedAccount ?
                 <BankTable account={ this.state.selectedAccount } />
                 : null }
              </Paper>
              </div>
          </div>
        );
      }
    }

// ************************************************************************

  const styles = theme => ({
      root: {
        display: 'flex',
        flexWrap: 'nowrap',
        width : '100%',
        // marginBottom : '5px',
        // justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        padding : '15px',
      },
      gridList: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth:'50%',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
        cols : 1,
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