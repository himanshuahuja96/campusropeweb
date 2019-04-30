import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import withStyles from '@material-ui/core/styles/withStyles';
import { PersonAdd } from 'components/MaterialIcons';

const styles = {
  root: {
    width: '100%',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial Rounded MT Bold,Helvetica Rounded,Arial,sans-serif',
  },
  appbar: {
    backgroundColor: '#00235b',
  },
  title: {
    fontFamily: 'Berkshire Swash',
    display: 'flex',
    justifyContent: 'flex-end',
    flexGrow: 1,
    marginLeft: 40,
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexGrow: 1,
  },
};

class PublicAppBar extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary" className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <Typography
              className={classes.title}
              variant="h4"
              color="inherit"
              noWrap
            >
              CampusRope
            </Typography>
            <div className={classes.wrapper}>
              <Link to="/login">
                <IconButton color="inherit">
                  <PersonAdd />
                </IconButton>
              </Link>
            </div>
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
