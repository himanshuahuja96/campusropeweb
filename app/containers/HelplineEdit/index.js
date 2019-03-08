/**
 *
 * HelplineEdit
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
import makeSelectHelplineEdit from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class HelplineEdit extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>HelplineEdit</title>
          <meta name="description" content="Description of HelplineEdit" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

HelplineEdit.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  helplineEdit: makeSelectHelplineEdit(),
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

const withReducer = injectReducer({ key: 'helplineEdit', reducer });
const withSaga = injectSaga({ key: 'helplineEdit', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HelplineEdit);
