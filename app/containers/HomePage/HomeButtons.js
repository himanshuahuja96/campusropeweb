/**
 *
 * CenterMenus
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
  root: {
    margin: 'auto',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    width: '60%',
    height: '75%',
    alignItems: 'center',
  },
  menuListItem: {
    height: 82,
    borderRadius: 5,
    display: 'flex',
    cursor: 'pointer',
    margin: 20,
    '& svg': {
      fontSize: 40,
    },
  },
  link: {
    textDecoration: 'none',
  },
  menuItemContent: {
    display: 'flex',
    alignItems: 'center',
    padding: 10,
  },
  menuTitleSize: {
    fontSize: 18,
  },
  menuItemButton: {
    width: 240,
    '& span': {
      display: 'flex',
      justifyContent: 'space-around',
    },
  },
});

/* eslint-disable  */
export class HomeButtons extends React.PureComponent {
  render() {
    const { menus, classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.root}>
          {menus.map(menu => (
            <div className={classes.menuListItem} key={menu.title}>
              <Link to={menu.linkTo} className={classes.link}>
                <Button
                  variant="outlined"
                  color="secondary"
                  className={classes.menuItemButton}
                >
                  <div className={classes.menuItemContent}>
                    <Typography type="subheading" color="secondary">
                      {menu.icon}
                    </Typography>
                  </div>
                  <Typography
                    variant="h6"
                    className={classNames(
                      classes.menuItemContent,
                      classes.menuTitleSize,
                    )}
                  >
                    {menu.title}
                  </Typography>
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

HomeButtons.propTypes = {
  classes: PropTypes.object.isRequired,
  menus: PropTypes.array.isRequired,
};

const componentWithStyles = withStyles(styles)(HomeButtons);
export default componentWithStyles;
