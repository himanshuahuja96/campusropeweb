import React, { Component } from 'react';
import { withStyles, Checkbox } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  pageTitle: {
    textAlign: 'center',
    marginBottom: 20,
  },
  wrapper: {
    maxWidth: 960,
    margin: '0 auto',
    border: '1px solid #ddd',
    borderRadius: 3,
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: 5,
    borderBottom: '1px solid #ddd',
    alignItems: 'center',
  },
  headRow: {
    display: 'flex',
    padding: '10px 5px',
    borderBottom: '1px solid #999',
    fontWeight: 'bold',
    backgroundColor: 'aliceblue',
  },
  quesColumn: {
    flexGrow: 1,
    minWidth: 500,
  },
  emailColumn: {
    minWidth: 200,
  },
  iconColumn: {
    minWidth: 100,
  },
  deleteIcon: {
    color: '#f66',
    cursor: 'pointer',
  },
});

class Admin extends Component {
  constructor(props) {
    super(props);
    props.fetchQuestions();
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1 className={classes.pageTitle}>Support - Admin Page</h1>
        <div className={classes.wrapper}>
          <div className={classes.headRow}>
            <div className={classes.quesColumn}>Question</div>
            <div className={classes.emailColumn}>Email</div>
            <div className={classes.iconColumn}>Answered</div>
            <div className={classes.iconColumn}>Delete</div>
          </div>
          {this.props.questions.map(item => (
            <div className={classes.row} key={item._id}>
              <div className={classes.quesColumn}>{item.question}</div>
              <div className={classes.emailColumn}>Email</div>
              <div className={classes.iconColumn}>
                <Checkbox />
              </div>
              <div className={classes.iconColumn}>
                <DeleteIcon
                  className={classes.deleteIcon}
                  onClick={() => this.props.deleteQuestion(item._id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Admin);
