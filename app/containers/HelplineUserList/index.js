/**
 *
 * HelplineUserList
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
import makeSelectHelplineUserList from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class HelplineUserList extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>HelplineUserList</title>
          <meta name="description" content="Description of HelplineUserList" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

HelplineUserList.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  helplineUserList: makeSelectHelplineUserList(),
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

const withReducer = injectReducer({ key: 'helplineUserList', reducer });
const withSaga = injectSaga({ key: 'helplineUserList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HelplineUserList);
