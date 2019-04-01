/**
 *
 * Drawer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import withStyles from '@material-ui/core/styles/withStyles';

const MenuItems = (menus, dispatch) =>
  menus.map(menu => (
    <ListItem button key={menu.id} onClick={() => menu.trigger(dispatch)}>
      <ListItemIcon>
        <Icon>{menu.iconName}</Icon>
      </ListItemIcon>
      <ListItemText primary={menu.menuLabel} />
    </ListItem>
  ));

const styles = theme => ({
  list: {
    width: 350,
    [theme.breakpoints.up('sm')]: {
      width: 250,
    },
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

/* eslint-disable react/prefer-stateless-function */
class TemporaryDrawer extends React.PureComponent {
  state = {
    open: true,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { dispatch, menuItems, classes } = this.props;
    return (
      <SwipeableDrawer
        anchor="right"
        open={this.props.open}
        onOpen={() => {}}
        onClose={() => this.props.toggleDrawer(false)}
        tabIndex={0}
        role="button"
        onClick={() => this.props.toggleDrawer(false)}
        onKeyDown={() => this.props.toggleDrawer(false)}
      >
        <div style={styles.list}>
          <List>
            {MenuItems(menuItems, dispatch)}
            <ListItem button onClick={this.handleClick}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText inset primary="Inbox" />
              {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Starred" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </div>
      </SwipeableDrawer>
    );
  }
}

TemporaryDrawer.propTypes = {
  open: PropTypes.bool,
  toggleDrawer: PropTypes.func,
  dispatch: PropTypes.func,
  menuItems: PropTypes.array,
  classes: PropTypes.object,
};

TemporaryDrawer.defaultProps = {
  open: false,
  menuItems: [],
};

export default withStyles(styles)(TemporaryDrawer);
