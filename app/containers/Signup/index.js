/**
 *
 * Signup
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'react-router-redux';
import withStyles from '@material-ui/core/styles/withStyles';

import Avatar from '@material-ui/core/Avatar';
import LockIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSignup from './selectors';
import reducer from './reducer';
import saga from './saga';
import SignupForm from './SignupForm';
import { signUpSubmit } from './actions';

const styles = theme => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    backgroundPosition: 'center' /* Center the image */,
    backgroundRepeat: 'no-repeat' /* Do not repeat the image */,
    backgroundSize: 'cover',
  },
  paper: {
    margin: '20px auto',
    textAlign: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`,
    width: `calc(100% - 24px)`,
    maxWidth: 350,
    minHeight: 400,
  },
  error: {
    color: 'red',
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit,
  },
  lockIconWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    marginTop: 15,
  },
});
/* eslint-disable react/prefer-stateless-function */
export class Signup extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Helmet>
          <title>Signup</title>
          <meta name="description" content="Description of Signup" />
        </Helmet>
        <div className={classes.container}>
          <Paper className={classes.paper}>
            <div className={classes.lockIconWrapper}>
              <Avatar className={classes.avatar}>
                <LockIcon />
              </Avatar>
            </div>
            <Typography variant="h5">Sign up to</Typography>
            <SignupForm
              classes={classes}
              handleSignUp={this.props.onSignUpFormSubmit}
              routeToLogin={this.props.routeToLogin}
            />
          </Paper>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  classes: PropTypes.object,
  onSignUpFormSubmit: PropTypes.func,
  routeToLogin: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  signup: makeSelectSignup(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onSignUpFormSubmit: (values, actions) =>
      dispatch(signUpSubmit(values, actions)),
    routeToLogin: () => dispatch(push('/login')),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'signup', reducer });
const withSaga = injectSaga({ key: 'signup', saga });
const componentWithStyles = withStyles(styles)(Signup);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(componentWithStyles);
