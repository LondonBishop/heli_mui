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

        const { Bills } = this.props

        return (
            <div>
                <BillSelectorContainer  />
                <Divider variant="middle" style={ { marginBottom: 15 } }/>
                <Typography variant="h6" gutterBottom component="h2">
                    Bills To Pay!
                </Typography>
                <BillsTable Bills= { Bills } />
                <Divider variant="middle" style={ { marginTop: 15 } }/>
                <BillTotal billsTotal={ 100 } />
            </div>
        );
    }
}


