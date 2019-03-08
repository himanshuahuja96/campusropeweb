/**
 *
 * NgoAdd
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectNgoAdd from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class NgoAdd extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>NgoAdd</title>
          <meta name="description" content="Description of NgoAdd" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

NgoAdd.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ngoAdd: makeSelectNgoAdd(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'ngoAdd', reducer });
const withSaga = injectSaga({ key: 'ngoAdd', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NgoAdd);
