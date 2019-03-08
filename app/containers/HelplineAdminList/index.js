/**
 *
 * HelplineAdminList
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
import makeSelectHelplineAdminList from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class HelplineAdminList extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>HelplineAdminList</title>
          <meta name="description" content="Description of HelplineAdminList" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

HelplineAdminList.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  helplineAdminList: makeSelectHelplineAdminList(),
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

const withReducer = injectReducer({ key: 'helplineAdminList', reducer });
const withSaga = injectSaga({ key: 'helplineAdminList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HelplineAdminList);
