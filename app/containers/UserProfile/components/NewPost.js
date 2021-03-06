import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import bgImage from 'images/loginbg.jpg';
import Add from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = () => ({
  addPostField: {
    margin: 0,
    marginLeft: '30px',
  },
  addPostBtnSection: {
    justifyContent: 'space-between',
  },
  addPostTopSection: {
    marginBottom: 20,
    alignItems: 'flex-end',
  },
  addPostSection: {
    display: 'flex',
    padding: '10px',
  },
  postAvatar: {
    width: 70,
    height: 70,
  },
});

const NewPostComponent = props => {
  const { classes } = props;

  return (
    <Paper>
      <div
        className={classNames(
          classes.addPostTopSection,
          classes.addPostSection,
        )}
      >
        <Avatar
          alt="Adelle Charles"
          src={bgImage}
          className={classes.postAvatar}
        />

        <TextField
          label="What's new ?"
          className={classes.addPostField}
          margin="normal"
          multiline
          fullWidth
        />
      </div>

      <div
        className={classNames(
          classes.addPostBtnSection,
          classes.addPostSection,
        )}
      >
        <span>
          <Button variant="contained" color="primary">
            <Add /> Photo
          </Button>
        </span>

        <Button variant="contained" color="primary">
          Post
        </Button>
      </div>
    </Paper>
  );
};

NewPostComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewPostComponent);
