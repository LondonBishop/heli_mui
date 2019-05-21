import React, {Component} from 'react'
import BillsTable from '../components/BillsTable'
import Typography from '@material-ui/core/Typography'
import BillTotal from '../components/BillsTotal'
import Divider from '@material-ui/core/Divider'
import BillSelectorContainer from '../containers/BillsSelectorContainer'

export default class BillsContainer extends Component {

    loadBillsData = () => {
    }
    
    render () {

        const { Bills, TotalBills } = this.props

        return (
            <div>
                <BillSelectorContainer  />
                <Divider variant="middle" style={ { marginBottom: 15 } }/>
                <Typography variant="h6" gutterBottom component="h2">
                    Payments coming up...
                </Typography>
                <BillsTable Bills= { Bills } />
                <Divider variant="middle" style={ { marginTop: 15 } }/>
                <BillTotal TotalBills={ TotalBills } />
            </div>
        );
    }
}


