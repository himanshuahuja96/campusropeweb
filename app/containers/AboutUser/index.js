/**
 *
 * AboutUser
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
import makeSelectAboutUser from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class AboutUser extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>AboutUser</title>
          <meta name="description" content="Description of AboutUser" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

AboutUser.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  aboutUser: makeSelectAboutUser(),
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

const withReducer = injectReducer({ key: 'aboutUser', reducer });
const withSaga = injectSaga({ key: 'aboutUser', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AboutUser);
