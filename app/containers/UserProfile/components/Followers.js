/**
 *
 * Followers
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MoreDialogOther from './MoreDialogOther';

const styles = theme => ({
  labelStyle: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    margin: theme.spacing.unit * 2,
  },
});

/* eslint-disable  */
export class Followers extends React.PureComponent {
  state = {
    open: false,
  };

  handleMoreClick = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = value => {
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.labelStyle}>
          <Typography variant="button" gutterBottom>
            135
          </Typography>
          <Typography variant="caption" gutterBottom style={{ marginLeft: 10 }}>
            {'Followers'}
          </Typography>
        </div>
        <div className={classes.labelStyle}>
          <Typography variant="button" gutterBottom>
            355
          </Typography>
          <Typography variant="caption" gutterBottom style={{ marginLeft: 10 }}>
            {'Followings'}
          </Typography>
        </div>
        <div>
          <Button
            variant="outlined"
            className={classes.button}
            style={{ marginLeft: 0 }}
          >
            Follow
          </Button>
          <Button variant="outlined" color="primary" className={classes.button}>
            Message
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.button}
            onClick={this.handleMoreClick}
          >
            More
          </Button>
        </div>
        <MoreDialogOther open={this.state.open} onClose={this.handleClose} />
      </React.Fragment>
    );
  }
}

Followers.propTypes = {
  classes: PropTypes.object.isRequired,
};

const componentWithStyles = withStyles(styles)(Followers);

export default componentWithStyles;
