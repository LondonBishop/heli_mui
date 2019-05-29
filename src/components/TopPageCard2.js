import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Format from '../components/Format';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

class TopPageCard2 extends Component {

    render() {

        const { classes, account, handleEditCard, handleSelectCard } = this.props

        return (

            <div className={classes.root} onClick={ (e) => { handleSelectCard(e, account) }} >
                { account ? (
                    <Card className={classes.card}  id={"CARD" + account.id}>
                    <CardContent>
                        <Typography style={ { fontSize:18} } >
                                {account.account_desc}
                        </Typography>
                        <Typography style={ { fontSize:24, fontWeight:"bold", alignContent : "right" } }>
                                {Format.formatMoneys(account.accountlines[0].balance)}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button name={account.id} size="small"  style={{backgroundColor:"lightblue"}} >
                                Select
                        </Button>
                        {/* <Button key={account.id} size="small" color="primary" onClick={ (e) => { handleEditCard(e) } } >
                                Edit
                        </Button> */}
                    </CardActions>

                    </Card>
                ) : null }
         </div>
            
        );
    }
}

// ************************************************************************

const styles = theme => ({
    root: {
    // display: 'flex',
    // flexWrap: 'wrap',
    
    //   overflow: 'hidden',
      backgroundColor:' theme.palette.background.paper,',
    },

      card: {
        margin : '10px',
        minWidth : '200px',
        // backgroundColor:'#fcae3c',
        backgroundColor : '#eaeaea',
      }
  });
  


TopPageCard2.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(TopPageCard2);
