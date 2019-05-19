import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

//icons
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import AccountBalance from '@material-ui/icons/AccountBalance'
import CreditCard from '@material-ui/icons/CreditCard'
import LocalAtm from '@material-ui/icons/LocalAtm'
import Tram from '@material-ui/icons/Tram'
import PhonelinkOff from '@material-ui/icons/PhonelinkOff'



export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <AccountBalance />
      </ListItemIcon>
      <ListItemText primary="Accounts" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CreditCard />
      </ListItemIcon>
      <ListItemText primary="Credit Cards" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LocalAtm />
      </ListItemIcon>
      <ListItemText primary="Bills" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="GOV" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Tram />
      </ListItemIcon>
      <ListItemText primary="Helicopter View" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset></ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="User Profile" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PhonelinkOff />
      </ListItemIcon>
      <ListItemText primary="Log Out" />
    </ListItem>
    
  </div>
);
