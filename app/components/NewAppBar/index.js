import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import {
  MenuIcon,
  AccountCircle,
  HomeIcon,
  RssFeedIcon,
  NotificationsIcon,
  ArrowBackIcon,
} from 'components/MaterialIcons';

import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    display: 'inline-block',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Berkshire Swash',
  },
  backIcon: {
    display: 'block',
    marginRight: '12px',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  sectionDesktop: {
    display: 'flex',
    [theme.breakpoints.between('xs', 'sm')]: {
      display: 'none',
    },
  },
  sectionMobile: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  appbar: {
    backgroundColor: '#00235b',
  },
  appbarRoot: {
    display: 'flex',
    justifyContent: 'center',
    width: '92%',
    marginLeft: 65,
    [theme.breakpoints.between('xs', 'sm')]: {
      display: 'none',
    },
  },
  iconLabel: {
    fontSize: 14,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  sectionMobileIconWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

class NewAppBar extends React.Component {
  state = {
    anchorEl: null,
  };

  handleProfileMenuOpen = event => {
    this.props.gotoUserProfile();
    this.setState({ anchorEl: event.currentTarget });
  };

  render() {
    const { anchorEl } = this.state;
    const { classes, toggleDrawer } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary" className={classes.appbar}>
          <Toolbar>
            <IconButton
              color="inherit"
              className={classes.sectionDesktop}
              onClick={() => this.props.gotoSelectedRoute('/')}
            >
              <ArrowBackIcon />
            </IconButton>
            <div className={classes.appbarRoot}>
              <IconButton
                color="inherit"
                onClick={() => this.props.gotoSelectedRoute('/feeds')}
                style={{ marginRight: 20, marginLeft: 20 }}
              >
                <RssFeedIcon />
                <span className={classes.iconLabel}>Feeds</span>
              </IconButton>
              <IconButton
                color="inherit"
                onClick={() => this.props.gotoSelectedRoute('/')}
                style={{ marginRight: 20, marginLeft: 20 }}
              >
                <HomeIcon />
                <span className={classes.iconLabel}>Home</span>
              </IconButton>
              <Typography
                className={classes.title}
                variant="h4"
                color="inherit"
                noWrap
              >
                CampusRope
              </Typography>
              <IconButton
                color="inherit"
                style={{ marginRight: 20, marginLeft: 20 }}
              >
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
                <span className={classes.iconLabel}>Notifications</span>
              </IconButton>
              <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true"
                style={{ marginRight: 20, marginLeft: 20 }}
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
                <span className={classes.iconLabel}>Profile</span>
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <IconButton
                  color="inherit"
                  onClick={() => this.props.gotoSelectedRoute('/')}
                >
                  <ArrowBackIcon />
                </IconButton>
                <Typography
                  className={classes.title}
                  variant="h4"
                  color="inherit"
                  noWrap
                >
                  CampusRope
                </Typography>
                <IconButton
                  onClick={toggleDrawer}
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="Open drawer"
                >
                  <MenuIcon />
                </IconButton>
              </div>
              <div className={classes.sectionMobileIconWrapper}>
                <IconButton
                  color="inherit"
                  onClick={() => this.props.gotoSelectedRoute('/')}
                  style={{ marginRight: 20 }}
                >
                  <HomeIcon />
                </IconButton>
                <IconButton
                  color="inherit"
                  onClick={() => this.props.gotoSelectedRoute('/feeds')}
                  style={{ marginRight: 20, marginLeft: 20 }}
                >
                  <RssFeedIcon />
                </IconButton>
                <IconButton
                  color="inherit"
                  style={{ marginRight: 20, marginLeft: 20 }}
                >
                  <Badge badgeContent={17} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                  aria-haspopup="true"
                  style={{ marginLeft: 20 }}
                  onClick={this.handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </div>
            </div>
            <div className={classes.sectionDesktop}>
              <IconButton
                onClick={toggleDrawer}
                className={classes.menuButton}
                color="inherit"
                aria-label="Open drawer"
              >
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NewAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  gotoUserProfile: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  gotoSelectedRoute: PropTypes.func.isRequired,
};

export default withStyles(styles)(NewAppBar);
