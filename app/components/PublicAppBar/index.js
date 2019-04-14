import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
  root: {
    width: '100%',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
  },
};

class PublicAppBar extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography
              className={classes.title}
              variant="h6"
              color="inherit"
              noWrap
            >
              Campusrope
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

PublicAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PublicAppBar);
