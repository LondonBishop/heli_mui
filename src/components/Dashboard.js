import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItems from './MenuItems';
import SecondListItems from './SecondaryMenuItems'
import BankAccountContainer from '../containers/BankAccountContainer'; 
import BillsContainer from '../containers/BillsContainer';
import HeliContainer from '../containers/HeliContainer';
import CreditCardContainer from '../containers/CreditCardContainer';
import LoginPage from '../components/LoginPage';
import Paper from '@material-ui/core/Paper';
// import drawerImage from '../images/heli3.jpg';





const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
    // backgroundImage: 'url(' + drawerImage + ')'
  },
  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
  h5: {
    marginBottom: theme.spacing.unit * 2,
  },

  toolbarLogo : {
    width : '50px',
    height : '50px',
    marginRight : '40px',
  }
});


class Dashboard extends React.Component {
 
  state = {
    open: true,
    userData : [],
    bankAccounts  : [],
    creditCards : [],
    bills : [],
    topPage : null,
    bottomPage : null,
    selectedAccount : null,
    isLoginIn : false,
    userName : null,
  };

  objNetWorth = {
    totalBills : 0,
    totalCreditCards: 0,
    totalNetWorthWithOutBills : 0,
  }


  componentDidMount () {

    fetch ("http://localhost:3000/users/1", 
            {
              method: "GET",
              headers:{
                         'Content-Type' : "application/json",
                      }
            }
    ).then ( resp => resp.json() )
    .then (data => this.loadMasterData(data) );
           
  }




 // event handlers ***********************************
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleSideBarClick = (e, selection) => {
    
    e.preventDefault();

    this.setState({ 
      topPage : selection,
    });
  };


  handleSelectedAccount = (event, account) => {
    event.preventDefault();
    this.setState({ 
      selectedAccount : account,
    });
  };


  handleLoginClick = (userName, password) => {

    console.log (userName + '   ' + password)
    if (userName && password) {
      if (userName === 'Harry' && password === "test123") {
          this.setState({
            isLoginIn : true,
            userName : userName,
            topPage : 'accounts',
          })
      } else {
        alert("invalid username or password")
      }

    } else {
      alert("Please enter a valid username and password")
    }

  };


  handleLogoutClick () {
    this.setState({
      isLoginIn : null,
      userName : null,
      password: null,
      topPage : null
    })
  };

 
// ***** methods **********************************************************

  loadMasterData (userData) {

    let bankData = userData.entities.filter( dataElement => dataElement.entitytype.entity_desc === "bank");
    let creditCardsData = userData.entities.filter( dataElement => dataElement.entitytype.entity_desc === "creditcard");
    let billsData = userData.entities.filter( dataElement => dataElement.entitytype.entity_desc === "bill");

    this.setState ( { 
      userData : userData,
      bankAccounts : bankData,
      creditCards : creditCardsData,
      bills : billsData,
    })

    // calculate Net Worth for later.
    this.calculateNetWorth(this.objNetWorth);

  }


  switchTopPage  = () => {

      switch (this.state.topPage) {

        case "accounts":
              return <BankAccountContainer bankAccounts={ this.state.bankAccounts } />
              break;
        
        case "creditcards":

                if (this.state.creditCards.length > 0) {
                    if (this.state.selectedAccount) {
                        return <CreditCardContainer creditCards={ this.state.creditCards } selectedAccount={ this.state.selectedAccount } handleSelectedAccount={ this.handleSelectedAccount }/>
                    } else {
                        return <CreditCardContainer creditCards={ this.state.creditCards } selectedAccount={ this.state.creditCards[0] } handleSelectedAccount={ this.handleSelectedAccount }/>
                    }
                } else {
                    // bring screen up with + cc button.
                }

                break;

        case "bills" :
                return <BillsContainer bills={ this.state.bills } creditCards={ this.state.creditCards } objNetWorth={ this.objNetWorth } />
                break;

        case "invest" :
                break;

        case "heli" :
                return <HeliContainer objNetWorth={this.objNetWorth} bankAccounts={ this.state.bankAccounts } />
                break;
        
        case 'logout': 
                this.handleLogoutClick();
                break;

      }
  }


  calculateBalanceIndicator = (account) => {

      if (account.accountlines[0].balance !== 0) {
        if (account.accountlines[account.accountlines.length -1].balance > account.accountlines[0].balance ) {
            account.balanceIndicator = "down"
        } else {
            account.balanceIndicator = "up"
        }
      } else {
        account.balanceIndicator = "neutral";
      } 
  }


  calculateNetWorth = (objNetWorth) => {

    const { bankAccounts, creditCards, bills } = this.state;

    //calculate bank indicators
    bankAccounts.map ( (account) => { this.calculateBalanceIndicator(account) });  

    // bank accounts 
    bankAccounts.forEach( bank => {
      objNetWorth.totalNetWorthWithOutBills += Number(bank.accountlines[0].balance);
    })
    
     //credit cards
    creditCards.forEach (creditCard => {
      objNetWorth.totalCreditCards += Number(creditCard.accountlines[0].balance) * -1;
    });

    //bills
    bills.forEach (bill => { 
      objNetWorth.totalBills += Number(bill.accountlines[0].amount);
    });

    objNetWorth.totalBills = Number(objNetWorth.totalBills.toFixed(2));
    objNetWorth.totalNetWorthWithOutBills = Number(objNetWorth.totalNetWorthWithOutBills.toFixed(2));
    objNetWorth.totalCreditCards =  Number(objNetWorth.totalCreditCards.toFixed(2));

  }


  // **************************************************


  render() {

    const { classes } = this.props;

    return (
      <div>
          { this.state.isLoginIn ? 
                <div className={classes.root}>

                      <CssBaseline />

                      <AppBar
                          position="absolute"
                          className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
                        >
                        <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
                        
                          <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={ classNames( classes.menuButton, this.state.open && classes.menuButtonHidden,) }
                          
                          >
                            <MenuIcon />
                          </IconButton>
                          <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            className={classes.title}
                          >
                                Helicopter Finance
                          </Typography>
                          

                        </Toolbar>
                      </AppBar>

                      <Drawer
                        variant="permanent"
                        classes={{
                          paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                        }}
                        open={this.state.open}
                        
                      >
                        <div className={classes.toolbarIcon}>
                          <img src={require('../images/HeliLogo.png')} className={classes.toolbarLogo}  />
                          <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon />
                          </IconButton>
                        </div>
                        {/* <Divider />
                        <IconButton><AccountCircle /> Hi {this.state.userName}! </IconButton>    */}
                        <Divider />
                        <List><MenuItems handleSideBarClick={ this.handleSideBarClick }/></List>
                        <Divider />
                        <List><SecondListItems  user={this.state.userName}  handleSideBarClick={this.handleSideBarClick } /></List>
                      </Drawer>

                      <main className={classes.content}>

                            <div className={classes.appBarSpacer} />

                            {/* top Page */}
                            {this.switchTopPage(classes)}
                            
                            {/* //bottom Page  */}

                      </main>

                </div>
          : <LoginPage handleLoginClick={ this.handleLoginClick }/>
      }
      </div>
    )
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
