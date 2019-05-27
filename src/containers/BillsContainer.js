import React, {Component} from 'react'
import BillsTable from '../components/BillsTable'
import Typography from '@material-ui/core/Typography'
import BillTotal from '../components/BillsTotal'
import Divider from '@material-ui/core/Divider'
import BillSelectorContainer from '../containers/BillsSelectorContainer';
import Format from '../components/Format';


export default class BillsContainer extends Component {



    
    combinedData = (bills, creditcards) => {

        let newData1 = bills.map ( bill => (
            { r1: bill.account_desc, 
              r2: Format.formatDate(bill.duedate), 
              r3: Format.formatMoneyNoSymbol((bill.accountlines[0].amount * -1).toFixed(2)),
              r4: bill.recurring
            }
        ))
  
        let newData2 = creditcards.map ( cc => (
          { r1: cc.account_desc, 
            r2: Format.formatDate(cc.duedate), 
            r3: Format.formatMoneyNoSymbol(cc.accountlines[0].balance),
            r4: cc.recurring
          }
      ))
      
      return [...newData1, ...newData2]  
    };


    handleBillsDueChange = (selection) => {
        console.log (selection)
        debugger
    }

    
    render () {

        const { bills, creditCards, objNetWorth } = this.props

        return (
            <div>
                <BillSelectorContainer handleBillsDueChange={ this.handleBillsDueChange } />
                <Divider variant="middle" style={ { marginBottom: 15 } }/>
                <Typography variant="h6" gutterBottom component="h2">
                    Payments coming up...
                </Typography>
                <BillsTable combinedData={ this.combinedData( bills, creditCards )} />
                <BillTotal totalBills={ objNetWorth.totalBills + objNetWorth.totalCreditCards } />
            </div>
        );
    }
}


