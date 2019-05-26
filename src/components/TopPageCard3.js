import React, { Component } from 'react';
import Format from './Format';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';


class TopPageCard3 extends Component {

    render() {

        const { classes } = this.props

        return (
                <div className={classes.cardsrow}>
                    <Paper className={classes.card}>
                        <img src={require('../images/bills.png')} className={classes.cardImage} />
                        <div className={classes.cardTitle}>
                            Your Total Bills
                        </div>
                        <div className={classes.cardDesc}>
                            {Format.formatMoneys((this.props.objNetWorth.totalBills +  this.props.objNetWorth.totalCreditCards) * -1)}
                        </div>
                        {/* <div >
                            <button type='button' class='card-action-readMore'>Read More</button>
                        </div> */}
                    </Paper>

                    <Paper className={classes.card}>
                        <img src={require('../images/networth.jpeg')} className={classes.cardImage} />
                        <div className={classes.cardTitle}>
                            How much you have
                        </div>
                        <div className={classes.cardDesc}>
                                {Format.formatMoneys( this.props.objNetWorth.totalNetWorthWithOutBills) }
                        </div>
                        {/* <div >
                            <button type='button' class='card-action-readMore'>Read More</button>
                        </div> */}
                    </Paper>

                    <Paper className={classes.card} style ={{backgroundColor: 'orange'}}>
                        <img src={require('../images/money.jpeg')} className={classes.cardImage} />
                        <div className={classes.cardTitle}>
                                Your Net Worth (with Bills)
                        </div>
                        <div className={classes.cardDesc}>
                                { Format.formatMoneys(
                                (this.props.objNetWorth.totalNetWorthWithOutBills + 
                                this.props.objNetWorth.totalBills + 
                                this.props.objNetWorth.totalCreditCards).toFixed(2)) }
                        </div>
                        {/* <div >
                            <button type='button' class='card-action-readMore'>Read More</button>
                        </div> */}
                    </Paper>

                </div>

        )

    }

}

// ************************************************************************

const styles = theme => ({
    
    // $buttonColor: #ff1d8e,	

    body : {
        fontFamily: 'Roboto',
        fontSize: '0.9em',
        backgroundColor: '#BBDEFB',
    },
    
    cardsrow : {
        // background-color: #fff
        margin: '0px auto',
    },

    card : {
        display: 'inline-block',
        width: '30%',
        // minWidth: '250px',
        boxSizing: 'border-box',
        boxShadow: '2px 2px 25px 0px transparentize(black,0.3)',
        borderRadius: '3px',
        margin: '1em 1.5%',
        animation: 'scl 0.5s ease-in-out',
        transformOrigin: 'left center',
        backgroundColor:'#fff',
    },

    cardTitle : {
        marginTop: '1em',
        paddingBottom: '0.25em',
        paddingLeft: '0.5em',
        color: '#fff',
        fontSize: '1.0em',
        textAlign: 'center',
        color: 'black',
    },

     cardImage : {
            width: '100%',
            height: '162px'
     },

     cardDesc : {
            // padding: '1em 1em 0.25em 1em',
            paddingBottom : '1em',
            borderBottom: '1px solid transparentize(grey,0.7)',
            height: 'auto',
            overflow: 'hidden',
            textAlign: 'center',
            fontSize : '1.25em',
        }

        // &-desc
        //     padding: 0 1em 1em 1em
        //     border-bottom: 1px solid transparentize(grey,0.7)
        //     height: 75px
        //     overflow: hidden
        //     text-align: justify
        // &-action
        //     &-readMore
        //         margin: 1em 0 1em 1em
        //         height: 3em
        //         width: 8em
        //         background: $buttonColor
        //         border: none
        //         font-weight: light
        //         color: #fff
        //         position: relative
        //         overflow: hidden
        //         outline: none
        //         border-radius: 2px
        //         &:hover
        //             background: transparentize(#ff1d8e,0.2)
        //             transition: all 0.1s ease-in
        
                
        // &:hover
        //     box-shadow: 7px 7px 15px 2px transparentize(black,0.5)
        //     transition: box-shadow 0.3s ease-in
  });
  


  TopPageCard3.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(TopPageCard3);