import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { push } from 'react-router-redux';
import { Typography } from '@material-ui/core';
import {
  makeSelectStates,
  makeSelectNgoTypes,
} from '../../store/constants/selectors';
import makeSelectLoggedUser from '../../store/loggeduser/selectors';
import { editNgo } from './actions';
import NgoForm from './NgoForm';

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



class EditNgo extends React.Component {
  onCancel() {
    this.props.dispatch(push('/ngos'));
  }
  onSubmit(values, actions) {
    this.props.editNgo(
      {
        ...values,
        _id: this.props.match.params.id,
        createdBy: this.props.loggedUser._id,
        status: 'PENDING'
      },
      actions,
    );
  }
  render() {
    const { classes, ngo_types, states, initialValues } = this.props;
    console.log('initialValues', this.props.initialValues);
    return (
      <div>
        <Typography variant="h3">Edit NGO</Typography>
        <NgoForm
          classes={classes}
          onCancel={() => this.onCancel()}
          onSubmit={(values, actions) => this.onSubmit(values, actions)}
          states={states}
          ngo_types={ngo_types}
          initialValues={initialValues}
        />
      </div>
    );
  }
}

EditNgo.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  states: makeSelectStates(),
  ngo_types: makeSelectNgoTypes(),
  loggedUser: makeSelectLoggedUser(),
  initialValues: (state, ownProps) => state.ngo.fetchedNgos.find(item => item._id === ownProps.match.params.id && item.createdBy._id === state.loggedUser.user._id)
});




function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    editNgo: (values, actions) =>
      dispatch(editNgo(values, actions)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withStyles(styles),
  withConnect,
)(EditNgo);
