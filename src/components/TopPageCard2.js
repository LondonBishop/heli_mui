import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default class TopPageCard2 extends Component {

    render() {

        const { tile, handleEditCard, handleSelectCard } = this.props

        return (

            <div>
                { tile ? (
                    <Card>
                    <CardContent>
                        <Typography style={ { fontSize:18} } >
                                {tile.account_desc}
                        </Typography>
                        <Typography component='p' style={ { fontSize:24, fontWeight:"bold" } }>
                                £{tile.balance}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button key={tile.id} size="small" color="primary" onClick={ (e) => { handleSelectCard(e) } } >
                                Select
                        </Button>
                        <Button key={tile.id} size="small" color="primary" onClick={ (e) => { handleEditCard(e) } } >
                                Edit
                        </Button>
                    </CardActions>

                    </Card>
                ) : null }
         </div>
            
        );
    }
}

