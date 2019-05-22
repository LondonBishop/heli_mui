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
// import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import { mainListItems, secondaryListItems } from '../mui_components/listItems';
// import SimpleLineChart from '../../mui/SimpleLineChart';
import SimpleTable from './SimpleTable';
import MenuItems from './MenuItems';
import SecondListItems from './SecondaryMenuItems'
// import { switchCase } from '@babel/types';
import BankAccountContainer from '../containers/BankAccountContainer'; 
import BillsContainer from '../containers/BillsContainer';
import HeliContainer from '../containers/HeliContainer';

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
});


class Dashboard extends React.Component {
 
  state = {
    open: true,
    userData : [],
    bankAccounts  : [],
    creditCards : [],
    bills : [],
    topPage : "creditcards",
    bottomPage : null,
  };

  objNetWorth = {
    totalBills : 0,
    totalNetWorthWithBills : 0,
    totalNetWorthWithOutBills : 0,
  }

  componentDidMount () {
    fetch ("http://localhost:3000/user", 
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

  handleSideBarClick = (event, selection) => {
    event.preventDefault();
    this.setState({ 
      topPage : selection,
    });
  }
 
// ***** methods **********************************************************

  loadMasterData (userData) {

    let bankData = userData.filter( dataElement => dataElement.entity === "bank");
    let creditCardsData = userData.filter( dataElement => dataElement.entity === "creditcard");
    let billsData = userData.filter( dataElement => dataElement.entity === "bill");

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
          // return <TopPageList inBoundData={ this.state.bankAccounts } /> 
          return <BankAccountContainer BankAccounts={ this.state.bankAccounts } />
          break;
        
        case "creditcards":
          // return <BankAccountContainer BankAccounts={ this.state.creditCards } />
          break;


        case "bills" :
          return <BillsContainer Bills={ this.state.bills } TotalBills={ this.objNetWorth.totalBills } />
          break;

        case "invest" :
          break;

        case "heli" :
         
          return <HeliContainer objNetWorth={this.objNetWorth} bankAccounts={ this.state.bankAccounts } />
          break;

        default:

      }
  }


  calculateNetBalance = (account) => {
    // let calculatedNetBalance = (account.transactions[account.transactions.length -1].balance -  account.transactions[0].balance).toFixed(2);
    // if (calculatedNetBalance === 0) {
    //   calculatedNetBalance = account.transactions[0].balance
    // }
    // account.calculatedNetBalance = calculatedNetBalance

      if (account.transactions[0].balance !== 0) {
        if (account.transactions[account.transactions.length -1].balance > account.transactions[0].balance ) {
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

    let totalNetWorthWithOutBills = 0;
    let totalBillsAndCC = 0;

    //calculate bank indicators
    bankAccounts.map ( (account) => { this.calculateNetBalance(account) });  

    bankAccounts.forEach( bank => {
      totalNetWorthWithOutBills += bank.transactions[0].balance;
    })
    
    //credit cards
    creditCards.forEach ( creditcard => { 
      totalBillsAndCC += creditcard.balance; 
      totalNetWorthWithOutBills += creditcard.balance; 
    });

    //bills
    bills.forEach (bill => { 
      totalBillsAndCC += Number(bill.transactions[0].amount);
      
    });

    objNetWorth.totalBills = totalBillsAndCC.toFixed(2);
    objNetWorth.totalNetWorthWithOutBills = totalNetWorthWithOutBills.toFixed(2); 

    objNetWorth.totalNetWorthWithBills = (Number(objNetWorth.totalNetWorthWithOutBills) + Number(objNetWorth.totalBills)).toFixed(2);
   
  }




  // **************************************************


  render() {

    const { classes } = this.props;

    

    return (

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
              Helicopter
            </Typography>

            {/* <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
                </Badge>
            </IconButton> */}

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
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List><MenuItems handleSideBarClick={ this.handleSideBarClick }/></List>
          <Divider />
          <List><SecondListItems /></List>
        </Drawer>

        <main className={classes.content}>

              <div className={classes.appBarSpacer} />

              {/* top Page */}
              {this.switchTopPage(classes)}

              {/* //bottom Page  */}

        </main>

      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
