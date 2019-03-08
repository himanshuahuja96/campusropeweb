/**
 *
 * NgoVerificationList
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
import makeSelectNgoVerificationList from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class NgoVerificationList extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>NgoVerificationList</title>
          <meta
            name="description"
            content="Description of NgoVerificationList"
          />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

NgoVerificationList.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ngoVerificationList: makeSelectNgoVerificationList(),
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

const withReducer = injectReducer({ key: 'ngoVerificationList', reducer });
const withSaga = injectSaga({ key: 'ngoVerificationList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NgoVerificationList);
