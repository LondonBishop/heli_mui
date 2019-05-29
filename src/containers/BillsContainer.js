import React, {Component} from 'react'
import BillsTable from '../components/BillsTable'
import Typography from '@material-ui/core/Typography'
import BillTotal from '../components/BillsTotal'
import Paper from '@material-ui/core/Paper'
import BillSelectorContainer from '../containers/BillsSelectorContainer';
import Format from '../components/Format';
import HeliChart from '../components/HeliChart';


export default class BillsContainer extends Component {

    state ={
        billsFilter : "1",
    }
    
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
      
      let togetherData = [...newData1, ...newData2]  
      
       //sort array in date order.
      togetherData.sort(function(a,b) {
                    let dateA = a.r2.split('/')
                    let dateB = b.r2.split('/')
                
                    let newDateA = new Date(dateA[2], dateA[1] - 1, dateA[0])
                    let newDateB = new Date(dateB[2], dateB[1] - 1, dateB[0])
                    return newDateA - newDateB
    
        });

      return togetherData;

    };



    checkTransDate = (dueDate, selection) => {

        debugger
        let endOfDate = null;

        let dueDateSplit = dueDate.split('/');
        let newDueDate = new Date(dueDateSplit[2], dueDateSplit[1]-1, dueDateSplit[0]);

        let today = new Date

        switch (selection) {
            case "2":
                endOfDate = new Date(today.getFullYear(), today.getMonth() + 1, 0 )
                break;
            
            case "3":
                endOfDate = new Date(today)
                endOfDate.setDate(endOfDate.getDate() + 7)
                break; 
        }
    
        if (newDueDate <= endOfDate ) {
            return true;
        } else {
            return false;
        }
    }


    handleBillsDueChange = (selection) => {
        this.setState({
            billsFilter : selection
        })
    }


    loadBillsTable = (selection) => {

        const { bills, creditCards, objNetWorth } = this.props
      
        let combinedData = this.combinedData( bills, creditCards )
  
        switch (selection) {

            case "1":
            return <div><BillsTable combinedData={ combinedData } />
                    <BillTotal totalBills={ objNetWorth.totalBills + objNetWorth.totalCreditCards } /></div>
            break;

           case "2":                
                
                let newCombinedData = combinedData.filter( row => (
                    this.checkTransDate(row.r2, selection)
                    ))
                
                let totalBills = 0;
                newCombinedData.forEach(element => {
                    totalBills += Number(element.r3) * -1
                });
               
               return <div><BillsTable combinedData={ newCombinedData } /> 
                        <BillTotal totalBills={ totalBills } /></div>
               break;

           case "3":
                let newCombinedData2 = combinedData.filter( row => (
                    this.checkTransDate(row.r2, selection)
                    ))
                
                let totalBills2 = 0;
                newCombinedData2.forEach(element => {
                    totalBills2 += Number(element.r3) * -1
                });
               
               return <div><BillsTable combinedData={ newCombinedData2 } /> 
                        <BillTotal totalBills={ totalBills2 } /></div>
               break;
       }
    }


    
    render () {

        return (
            <div>
                <BillSelectorContainer handleBillsDueChange={ this.handleBillsDueChange } style ={{marginBottom : 20}} />
                { this.loadBillsTable(this.state.billsFilter) }
                
            </div>
        );
    }
}


