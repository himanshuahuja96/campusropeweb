/**
 *
 * NgoEdit
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
import makeSelectNgoEdit from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class NgoEdit extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>NgoEdit</title>
          <meta name="description" content="Description of NgoEdit" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

NgoEdit.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ngoEdit: makeSelectNgoEdit(),
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

const withReducer = injectReducer({ key: 'ngoEdit', reducer });
const withSaga = injectSaga({ key: 'ngoEdit', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NgoEdit);
