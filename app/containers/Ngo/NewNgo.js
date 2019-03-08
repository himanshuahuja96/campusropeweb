/**
 *
 * NewNgo
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { push } from 'react-router-redux';

import {
  makeSelectStates,
  makeSelectNgoTypes,
} from '../../store/constants/selectors';
import makeSelectLoggedUser from '../../store/loggeduser/selectors';
import { submitNewNgo } from './actions';
import NgoForm from './NgoForm';
import { Typography } from '@material-ui/core';

/* eslint-disable*/

const styles = theme => ({
  form: {},
  submit: {
    marginTop: theme.spacing.unit * 2,
  },
  cancel: {
    marginLeft: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
  },
  error: {
    color: 'red',
  },
  uploadBtn: {
    marginLeft: 0,
    margin: theme.spacing.unit,
  },
});

/* eslint-disable react/prefer-stateless-function */

class NewNgo extends React.Component {
  onCancel() {
    this.props.dispatch(push('/ngos'));
  }
  onSubmit(values, actions) {
    this.props.submitNewNgoDetails(
      {
        ...values,
        createdBy: this.props.loggedUser._id,
      },
      actions,
    );
  }
  render() {
    const { classes, ngo_types, states } = this.props;
    return (
      <div>
        <Typography variant="h3">Add New NGO</Typography>
        <NgoForm
          classes={classes}
          onCancel={() => this.onCancel()}
          onSubmit={(values, actions) => this.onSubmit(values, actions)}
          states={states}
          ngo_types={ngo_types}
        />
      </div>
    );
  }
}

NewNgo.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  states: makeSelectStates(),
  ngo_types: makeSelectNgoTypes(),
  loggedUser: makeSelectLoggedUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    submitNewNgoDetails: (values, actions) =>
      dispatch(submitNewNgo(values, actions)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withStyles(styles),
  withConnect,
)(NewNgo);
