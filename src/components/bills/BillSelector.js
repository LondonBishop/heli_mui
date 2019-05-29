import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
// import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
// import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import NativeSelect from '@material-ui/core/NativeSelect';


class NativeSelects extends React.Component {


  state = {
    dueby: '1',
    name: 'hai',
    labelWidth: 0,
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
    this.props.handleBillsDueChange(event.target.value)
  };


  render() {

    const { classes, handleBillsDueChange } = this.props;

    return (
      <div className={classes.root}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-dueby-native-simple"
          >
            Bills due by
          </InputLabel>
          <Select native
            value={this.state.dueby}
            onChange={ this.handleChange('dueby') }
            input={
              <OutlinedInput
                name="dueby"
                labelWidth={this.state.labelWidth}
              
                id="outlined-dueby-native-simple"
              />
            }
          >
            <option value="" />
            <option value={'1'}>...anytime</option>
            <option value={'2'}>...the end of the month</option>
            <option value={'3'}>...the end next 7 days</option>
          </Select>
        </FormControl>
     
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});


NativeSelects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NativeSelects);