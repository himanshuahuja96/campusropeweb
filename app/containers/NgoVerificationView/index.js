/**
 *
 * NgoVerificationView
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
import makeSelectNgoVerificationView from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class NgoVerificationView extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>NgoVerificationView</title>
          <meta
            name="description"
            content="Description of NgoVerificationView"
          />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

NgoVerificationView.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ngoVerificationView: makeSelectNgoVerificationView(),
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

const withReducer = injectReducer({ key: 'ngoVerificationView', reducer });
const withSaga = injectSaga({ key: 'ngoVerificationView', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NgoVerificationView);
