/**
 *
 * MyNgos
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
import makeSelectMyNgos from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class MyNgos extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>MyNgos</title>
          <meta name="description" content="Description of MyNgos" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

MyNgos.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  myNgos: makeSelectMyNgos(),
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

const withReducer = injectReducer({ key: 'myNgos', reducer });
const withSaga = injectSaga({ key: 'myNgos', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MyNgos);
