import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { createStructuredSelector } from 'reselect';
import Upload from 'components/Upload/Loadable';
import { makeSelectLoggedUser } from '../../../store/loggeduser/selectors';

/* eslint react/prop-types: 0 */
class BasicInfoEdit extends React.PureComponent {
  render() {
    const { values = {}, handleChange} = this.props;
    return (
      <React.Fragment>
          <FormControl
            margin="normal"
            required="required"
            fullWidth="fullWidth"
          >
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input
              id="name"
              name="name"
              autoComplete="name"
              value={values.name}
              onChange={handleChange}
              autoFocus="autoFocus"
              fullWidth="fullWidth"
            />
          </FormControl>

          <FormControl
            margin="normal"
            required="required"
            fullWidth="fullWidth"
          >
            <InputLabel htmlFor="name">Country</InputLabel>
            <Input
              id="country"
              name="country"
              value={values.country}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl
            margin="normal"
            required="required"
            fullWidth="fullWidth"
          >
            <InputLabel htmlFor="name">Home Town</InputLabel>
            <Input
              id="homeTown"
              name="homeTown"
              value={values.homeTown}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl
            margin="normal"
            required="required"
            fullWidth="fullWidth"
          >
            <InputLabel htmlFor="name">Current City</InputLabel>
            <Input
              id="currentCity"
              name="currentCity"
              value={values.currentCity}
              onChange={handleChange}
            />
          </FormControl>
          </React.Fragment>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

const mapStateToProps = createStructuredSelector({
  loggedUserInfo: makeSelectLoggedUser(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(BasicInfoEdit);
