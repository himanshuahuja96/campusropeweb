import React, { Component } from 'react';

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

import data from './data';

const styles = theme => ({
  root: {
    width: '100%',
  },
  wrapper: {
    maxWidth: 960,
    margin: '0 auto',
    padding: 20,
  },
  pageTitle: {
    textAlign: 'center',
    margin: 20,
  },
  title: {
    backgroundColor: 'aliceblue',
  },
  ques: {
    margin: '0px 10px',
    fontWeight: 'bold',
  },
  list: {
    display: 'block',
    padding: 0,
  },
  note: {
    marginTop: 10,
    fontStyle: 'italic',
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

class FAQ extends Component {
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

  componentWillReceiveProps(nextProps) {
    if (
      this.props.callInProgress &&
      !nextProps.callInProgress &&
      !nextProps.error
    ) {
      this.setState({
        displayQuesInput: false,
        inputError: null,
        questionText: '',
      });
    }
  }

  render() {
    const { classes } = this.props;
    const { displayQuesInput } = this.state;
    return (
      <div>
        <Typography variant="h5" className={classes.pageTitle}>
          Frequenty Asked Questions (FAQ)
        </Typography>
        <div className={classes.wrapper}>
          {data.map((item, i) => (
            <ExpansionPanel key={i}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                className={classes.title}
              >
                <Typography className={classes.heading}>
                  {item.title}
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.list}>
                {item.body.map((qitem, i) => (
                  <ExpansionPanel key={i}>
                    <ExpansionPanelSummary
                      expandIcon={
                        <ExpandMoreIcon style={{ marginRight: 20 }} />
                      }
                      className={classes.ques}
                    >
                      <Typography className={classes.heading}>
                        {qitem.ques}
                      </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography>{qitem.ans}</Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                ))}
              </ExpansionPanelDetails>
            </ExpansionPanel>
          ))}
          <Typography variant="caption" className={classes.note}>
            If you don't find your question, please submit your question. We
            will get back to you.
          </Typography>
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

export default withStyles(styles)(FAQ);
