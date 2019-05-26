import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Format from '../components/Format';

export default class TopPageCard2 extends Component {

    render() {

        const { account, handleEditCard, handleSelectCard } = this.props

        return (

            <div>
                { account ? (
                    <Card>
                    <CardContent>
                        <Typography style={ { fontSize:18} } >
                                {account.account_desc}
                        </Typography>
                        <Typography style={ { fontSize:24, fontWeight:"bold", alignContent : "right" } }>
                                {Format.formatMoneys(account.accountlines[0].balance)}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button key={account.id} size="small"  style={{backgroundColor:"lightblue"}} onClick={ (e) => { handleSelectCard(e, account) } } >
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

