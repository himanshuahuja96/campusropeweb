/**
 *
 * NgoView
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
import makeSelectNgoView from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class NgoView extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>NgoView</title>
          <meta name="description" content="Description of NgoView" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

NgoView.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ngoView: makeSelectNgoView(),
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

const withReducer = injectReducer({ key: 'ngoView', reducer });
const withSaga = injectSaga({ key: 'ngoView', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NgoView);
