import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MuiInputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon'

const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = theme => ({
  secondaryBar: {
    zIndex: 0,
  },
  menuButton: {
    marginLeft: -theme.spacing.unit,
  },
  iconButtonAvatar: {
    padding: 4,
  },
  link: {
    textDecoration: 'none',
    color: lightColor,
    '&:hover': {
      color: theme.palette.common.white,
    },
  },
  button: {
    borderColor: lightColor,
  },
});

function Header(props) {
  const { classes } = props;

  return (
    <React.Fragment>
     
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={8}>
            <Grid item xs>
              <Typography color="inherit" variant="h5">
                Campusrope
              </Typography>
            </Grid>
            <Hidden smDown>
          <Grid item lg>
            <TextField
              fullWidth
              placeholder="Search Campusrope"
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <MuiInputAdornment position="start">
                    <Icon>search</Icon>
                  </MuiInputAdornment>
                ),
              }}
            />
          </Grid>
        </Hidden>
            <Grid item>
              <Tooltip title="Help">
                <IconButton color="inherit">
                  <Avatar />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <Tabs value={1} textColor="inherit" centered>
          <Tab textColor="inherit" label="Trends" />
          <Tab textColor="inherit" label="Home" />
          <Tab textColor="inherit" label="Sign In" />
        </Tabs>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);