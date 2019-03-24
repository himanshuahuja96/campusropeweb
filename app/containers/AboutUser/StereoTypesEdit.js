import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { createStructuredSelector } from 'reselect';

/* eslint react/prop-types: 0 */
class StereoTypesEdit extends React.PureComponent {
  render() {
    const { values, handleChange } = this.props;
    return (
      <React.Fragment>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="name">Political View</InputLabel>
          <Input
            id="politicalView"
            name="politicalView"
            value={values.politicalView}
            onChange={handleChange}
            autoFocus
            multiline
          />
        </FormControl>

        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="name">Religious View</InputLabel>
          <Input
            id="religiousView"
            name="religiousView"
            value={values.religiousView}
            onChange={handleChange}
            multiline
          />
        </FormControl>
      </React.Fragment>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

const mapStateToProps = createStructuredSelector({});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(StereoTypesEdit);
