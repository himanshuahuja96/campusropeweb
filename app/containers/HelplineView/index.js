/**
 *
 * HelplineView
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
import makeSelectHelplineView from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class HelplineView extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>HelplineView</title>
          <meta name="description" content="Description of HelplineView" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

HelplineView.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  helplineView: makeSelectHelplineView(),
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

const withReducer = injectReducer({ key: 'helplineView', reducer });
const withSaga = injectSaga({ key: 'helplineView', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HelplineView);
