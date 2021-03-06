/**
 *
 * BrowserView
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Upload from 'components/Upload/Loadable';
import UserBio from './components/UserBio';
import AboutAchievementTabs from './components/AboutAchievementTabs';
import Followers from './components/Followers';
import MoreDialogSelf from './components/MoreDialogSelf';
import NewPost from './components/NewPost';
import UserPosts from './components/UserPosts';

const styles = () => ({
  avatar: {
    marginTop: 20,
    width: 150,
    height: 150,
    left: '30%',
    opacity: 1,
    display: 'block',
    transition: '.5s ease',
    backfaceVisibility: 'hidden',
  },
  root: {
    padding: 10,
  },
  userNameLabel: {
    textTransform: 'capitalize',
  },
});

/* eslint-disable  */
export class BrowserView extends React.PureComponent {
  render() {
    const { classes, userinfo, isOwner } = this.props;
    return (
      <Grid container className={classes.root}>
        <Grid item lg={4} md={4}>
          <div className="avatarContainer">
            <Avatar
              alt="Remy Sharp"
              src={userinfo.picture}
              className={classes.avatar}
            />
            <div className="middle">
              <Upload text="Change" onUploaded={res => console.log(res)} />
            </div>
          </div>
          <UserBio />
          <AboutAchievementTabs userinfo={userinfo} />
        </Grid>
        <Grid item lg={8} md={8}>
          <Typography
            variant="h4"
            gutterBottom
            className={classes.userNameLabel}
          >
            {userinfo.name}
          </Typography>
          <Followers />
          <MoreDialogSelf />
          <NewPost />
          <UserPosts />
        </Grid>
      </Grid>
    );
  }
}

BrowserView.propTypes = {
  classes: PropTypes.object.isRequired,
};

const componentWithStyles = withStyles(styles)(BrowserView);

export default componentWithStyles;
