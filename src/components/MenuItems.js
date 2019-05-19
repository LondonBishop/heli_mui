import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


//icons
import BarChartIcon from '@material-ui/icons/BarChart';
import AccountBalance from '@material-ui/icons/AccountBalance'
import CreditCard from '@material-ui/icons/CreditCard'
import LocalAtm from '@material-ui/icons/LocalAtm'
import Tram from '@material-ui/icons/Tram'


      
  export default class MenuItems extends Component {

    render () {

       const { handleSideBarClick } = this.props

        return (
            <div>
              <ListItem button onClick={ (e) => {handleSideBarClick(e, "accounts")} }>
                <ListItemIcon>
                  <AccountBalance />
                </ListItemIcon>
                <ListItemText primary="Accounts" />
              </ListItem>
              <ListItem button onClick={ (e) => { handleSideBarClick(e, "creditcards") } }>
                <ListItemIcon>
                  <CreditCard />
                </ListItemIcon>
                <ListItemText primary="Credit Cards" />
              </ListItem>
              <ListItem button onClick={ (e) => { handleSideBarClick(e, "bills") } } >
                <ListItemIcon>
                  <LocalAtm />
                </ListItemIcon>
                <ListItemText primary="Bills" />
              </ListItem>
              <ListItem button onClick={ (e) => { handleSideBarClick(e, "gov") } }>
                <ListItemIcon>
                  <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="GOV" />
              </ListItem>
              <ListItem button onClick={ (e) => { handleSideBarClick(e, "heli") } }>
                <ListItemIcon>
                  <Tram />
                </ListItemIcon>
                <ListItemText primary="Helicopter View" />
              </ListItem>
            </div>
        );
    }
}