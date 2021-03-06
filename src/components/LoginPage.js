import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import drawerImage from '../images/backdrop2.jpg';
import logoImage from '../images/HeliLongLogo.png';


class LoginPage extends Component {

     state ={
         userName: null,
         password : null,
     }

     handleOnChange = (e) => {
         this.setState ({
            [e.target.name] : e.target.value 
         })
     }

      render() {

        const { classes, handleLoginClick } = this.props


        return (

          <div className={classes.backdrop} >


                <form className={classes.form}>

                    <img  src={logoImage} className={classes.logo}  />

                    {/* <Paper className={classes.headerBar}>
                        <Typography className={classes.headerBarTitle}>
                            HELICOPTER FINANCE
                      </Typography>
                    </Paper> */}

                    <div className={classes.group}>

                        <TextField
                            id="standard-password-input"
                            label="Username"
                            className={classes.textField}
                            type="text"
                            autoComplete="username"
                            margin="normal"
                            value={this.state.userName}
                            name='userName'
                            onChange={ this.handleOnChange}
                        />
                       
                    </div>
                    
                    <div className={classes.group}>

                        <TextField
                            id="standard-password-input"
                            label="Password"
                            className={classes.textField}
                            type="password"
                            value={this.state.password}
                            autoComplete="password"
                            margin="normal"
                            name='password'
                            onChange={ this.handleOnChange }
                        />

                    </div>

                    <Button variant="contained"  className={classes.button} onClick={ (e) => handleLoginClick(this.state.userName, this.state.password) }>
                            Login
                    </Button>

                </form>

           

          </div>

        )
      }
    }



const styles = theme => ({

    backdrop : {
        padding : '50px',
        backgroundImage: 'url(' + drawerImage + ')',
        width :  '100%',
        height: '900px',
    },

    body : {
        fontFamily: 'Helvetica',
        backGround: '#eee',
      
    },

    h3 : { fontWeight: '300' },

    h1 : { color: '#636363' },

    h3 : { color: '#4a89dc' },

    form : {
        width: '280px',
        marginLeft: '631px',
        marginTop : '155px',
        padding: '1.0em 2em 2em 2em',
        // background: '#fafafa',
        background : 'white',
        border: '1px solid #ebebeb',
        boxShadow: 'rgba(0,0,0,0.14902) 0px 1px 1px 0px,rgba(0,0,0,0.09804) 0px 1px 2px 0px',
      
    },

    logo : {
         width : '320px',
         height: '110px',
        marginLeft: '-1.40em', 
        //  marginTop : '-2.5em',  
    },

    group : { 
        position: 'relative', 
        marginBottom: '45px', 
    },

    input : {
        fontSize: '18px',
        padding: '10px 10px 10px 5px',
        webkitAppearance: 'none',
        display: 'block',
        background: '#fafafa',
        color: '#636363',
        width: '100%',
        border: 'none',
        borderRadius: 0,
        borderBottom: '1px solid #757575',
    },

    textField: {
        marginLeft: '1em',
        marginRight: 'theme.spacing(1)',
        width: '90%',
        textAlign: 'center',
      },

     headerBar : {
        display: 'block',
        background : '#0a429b',
        minHeight : '50px',
        marginBottom : '2em',
     },

     headerBarTitle : {
        textAlign : 'center',
        padding : '1.5em',
        color : 'white',
        fontSize : '1.25em',
        fontWeight : 'bold'
     },
    
    button : {
        position: 'relative',
        display: 'inline-block',
        padding: '12px 24px',
        margin: '.3em 0 1em 0',
        width: '100%',
        verticalAlign: 'middle',
        color: '#fff',
        fontSize: '16px',
        lineHeight: '20px',
        textAlign: 'center',
        letterSpacing: '1px',
        background: 'orange',
        border: '0',
        borderottom: '2px solid #3160B6',
        cursor: 'pointer',
        transition: 'all 0.15s ease',
      }
    
})
    

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginPage)