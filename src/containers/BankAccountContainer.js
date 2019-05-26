import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BankAccountTop from '../components/BankAccountTop'
import BankTable from '../components/BankTable'
import Divider from '@material-ui/core/Divider';

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
        console.log ("event ---> select card")


        this.setState ( { 
          selectedAccount : account
         });
      }


      switchBottomPageView = () => {
      }


      


// * CLASS ****************************************************************** 

      render() {

        const { classes, bankAccounts } = this.props
      
        
        return (

          <div className={classes.root}>
              <div className={classes.gridList}>
                  <BankAccountTop BankAccounts ={ bankAccounts }  handleSelectCard={ this.handleSelectCard } handleEditCard={ this.handleEditCard }/>
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
                 <BankTable account={ this.state.selectedAccount } />
                 : null }
          </div>
        );
      }
    }

// ************************************************************************

  const styles = theme => ({
      root: {
        display: 'inline-flex',
        flexWrap: 'wrap',
        width : '100%',
        // justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
     
      },
      gridList: {
        flexWrap: 'nowrap',
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