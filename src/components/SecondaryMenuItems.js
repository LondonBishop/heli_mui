
import ListSubheader from '@material-ui/core/ListSubheader';
import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

//icons
import PhonelinkOff from '@material-ui/icons/PhonelinkOff'
import PeopleIcon from '@material-ui/icons/People';


export default class SecondListItems extends Component { 


    render() {
  
      const { handleSideBarClick } = this.props

      return (
        <div>
          <ListSubheader inset></ListSubheader>

          <ListItem button onClick={ (e) => handleSideBarClick(e, 'profile')} >
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="User Profile" />
          </ListItem>

          <ListItem button onClick={(e) => handleSideBarClick(e, 'logout')} >
            <ListItemIcon>
              <PhonelinkOff />
            </ListItemIcon>
            <ListItemText primary="Log Out" />
          </ListItem> 

        </div>
      )
    }
}