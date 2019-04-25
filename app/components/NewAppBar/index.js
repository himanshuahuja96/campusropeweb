import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import {
  MenuIcon,
  AccountCircle,
  HomeIcon,
  RssFeedIcon,
  NotificationsIcon,
  MoreIcon,
  ArrowBackIcon,
} from 'components/MaterialIcons';

import { fade } from '@material-ui/core/styles/colorManipulator';
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
    display: 'none',
    fontFamily: 'Berkshire Swash',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: 20,
      marginRight: 20,
    },
  },
  backIcon: {
    display: 'block',
    marginRight: '12px',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: '74%',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
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
    marginLeft: 85,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  iconLabel: {
    fontSize: 14,
    marginLeft: 5,
    fontWeight: 'bold',
  },
});

class NewAppBar extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleProfileMenuOpen = event => {
    this.props.gotoUserProfile();
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes, toggleDrawer } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <RssFeedIcon />
            </Badge>
          </IconButton>
          <p>Feeds</p>
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );
    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary" className={classes.appbar}>
          <Toolbar>
            <IconButton
              color="inherit"
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
              <IconButton
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
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
        {renderMobileMenu}
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
