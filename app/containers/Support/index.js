/**
 *
 * Support
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Button,
  TextField,
  withStyles,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSupport from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import data from './data';
import { submitQuestion } from './actions';

const styles = theme => ({
  root: {
    width: '100%',
  },
  wrapper: {
    maxWidth: 960,
    margin: '0 auto',
    padding: 20,
  },
  ques: {
    backgroundColor: 'aliceblue',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  questionWrap: {
    maxWidth: 600,
    padding: 20,
    margin: '0 auto',
  },
  buttonWrap: {
    textAlign: 'center',

    '& button': {
      margin: '0 20px',
    },
  },
});

/* eslint-disable react/prefer-stateless-function */
export class Support extends React.Component {
  state = {
    displayQuesInput: false,
    inputError: null,
    questionText: '',
  };

  handleSubmit = () => {
    if (!this.state.displayQuesInput) {
      this.setState({ displayQuesInput: true });
      return;
    }
    if (this.state.questionText.trim().length < 5) {
      this.setState({ inputError: 'Please enter a valid question' });
      return;
    }
    this.props.submitQuestion({
      question: this.state.questionText,
    });
  };

  render() {
    const { classes } = this.props;
    const { displayQuesInput } = this.state;
    return (
      <div>
        <Helmet>
          <title>Support</title>
          <meta name="description" content="Description of Support" />
        </Helmet>
        <div className={classes.wrapper}>
          {data.map((item, i) => (
            <ExpansionPanel key={i}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                className={classes.ques}
              >
                <Typography className={classes.heading}>{item.ques}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>{item.ans}</Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          ))}
        </div>
        <div className={classes.questionWrap}>
          {displayQuesInput && (
            <div style={{ marginBottom: 20 }}>
              <TextField
                required
                error={this.state.inputError}
                id="standard-required"
                label="Your question please?"
                margin="normal"
                fullWidth
                multiline
                rows={3}
                rowsMax={6}
                value={this.state.questionText}
                onChange={e =>
                  this.setState({
                    questionText: e.target.value,
                    inputError: null,
                  })
                }
              />
              {this.state.inputError && (
                <Typography style={{ color: 'red' }}>
                  {this.state.inputError}
                </Typography>
              )}
            </div>
          )}

          <div className={classes.buttonWrap}>
            {displayQuesInput && (
              <Button
                variant="contained"
                onClick={() => this.setState({ displayQuesInput: false })}
              >
                Cancel
              </Button>
            )}
            <Button
              color="primary"
              variant="contained"
              onClick={this.handleSubmit}
            >
              {displayQuesInput ? 'Submit' : 'Ask your question'}
            </Button>
            {this.props.callInProgress && <span> submitting... </span>}
          </div>
          {this.props.error && <Typography>{this.props.error}</Typography>}
        </div>
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

const mapDispatchToProps = {
  submitQuestion,
};

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
)(withStyles(styles)(Support));
