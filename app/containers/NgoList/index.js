/**
 *
 * NgoList
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
import makeSelectNgoList from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class NgoList extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>NgoList</title>
          <meta name="description" content="Description of NgoList" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

NgoList.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ngoList: makeSelectNgoList(),
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

const withReducer = injectReducer({ key: 'ngoList', reducer });
const withSaga = injectSaga({ key: 'ngoList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NgoList);
