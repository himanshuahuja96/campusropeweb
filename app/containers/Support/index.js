import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSupport from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Switch, Route } from 'react-router-dom';
import FAQ from './FAQ';
import Admin from './Admin';
import { submitQuestion, fetchQuestions, deleteQuestion } from './actions';

// eslint-disable-next-line
class Support extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Support</title>
          <meta name="description" content="Description of Support" />
        </Helmet>
        <Switch>
          <Route
            path="/support"
            exact
            render={() => (
              <FAQ
                submitQuestion={this.props.submitQuestion}
                callInProgress={this.props.callInProgress}
                error={this.props.error}
              />
            )}
          />
          <Route
            path="/support/admin"
            render={() => (
              <Admin
                fetchQuestions={this.props.fetchQuestions}
                deleteQuestion={this.props.deleteQuestion}
                questions={this.props.questions}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

Support.propTypes = {
  submitQuestion: PropTypes.func.isRequired,
  callInProgress: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

/*
const mapStateToProps = createStructuredSelector({
  support: makeSelectSupport(),
});
*/

const mapStateToProps = ({ support }) => ({
  ...support,
});

const mapDispatchToProps = dispatch => ({
  submitQuestion: payload => dispatch(submitQuestion(payload)),
  fetchQuestions: () => dispatch(fetchQuestions()),
  deleteQuestion: id => dispatch(deleteQuestion(id)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'support', reducer });
const withSaga = injectSaga({ key: 'support', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Support);
