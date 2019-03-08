/**
 *
 * TrendingNews
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import YouTube from 'react-youtube';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import ThumbUpSharp from '@material-ui/icons/ThumbUpSharp';
import Comment from '@material-ui/icons/Comment';
import Share from '@material-ui/icons/Share';

import _isEmpty from 'lodash/isEmpty';

const styles = theme => ({
  card: {
    marginTop: theme.spacing.unit * 1,
    marginBottom: theme.spacing.unit * 3,
    cursor: 'pointer',
  },
  media: {
    height: 0,
    paddingTop: '38%', // 16:9
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
  commentbox: {
    width: '100%',
    padding: 5,
    border: 'none',
  },
});

/* eslint-disable*/

/* eslint-disable react/prefer-stateless-function */
const opts = {
  height: '390',
  width: '100%',
};

const TrendingNewsBox = ({
  trendingNewsData,
  classes,
  onTrendingNewsClick,
  getCreatedOnDate,
}) => {
  return (
    <Card className={classes.card}>
      <CardHeader
        onClick={() => onTrendingNewsClick(trendingNewsData)}
        avatar={
          <Avatar
            src={trendingNewsData.newsClient.logourl}
            className={classNames(classes.avatar, classes.bigAvatar)}
          />
        }
        title={trendingNewsData.newsClient.name}
        subheader={getCreatedOnDate(trendingNewsData.createdAt)}
      />
      <CardContent onClick={() => onTrendingNewsClick(trendingNewsData)}>
        <Typography component="p">{trendingNewsData.headline}</Typography>
      </CardContent>
      {!_isEmpty(trendingNewsData.cover_photo) && (
        <CardMedia
          onClick={() => onTrendingNewsClick(trendingNewsData)}
          className={classes.media}
          image={trendingNewsData.cover_photo}
        />
      )}
      {!_isEmpty(trendingNewsData.youtube_link) && (
        <YouTube videoId={trendingNewsData.youtube_link} controls opts={opts} />
      )}
      <CardActions className={classes.actions} disableActionSpacing>
        <Avatar
          alt="Remy Sharp"
          src={trendingNewsData.newsClient.logourl}
          className={classes.avatar}
        />
        <Input className={classes.commentbox} disabled placeholder="comment" />
        <IconButton aria-label="Like">
          <ThumbUpSharp />
        </IconButton>
        <IconButton aria-label="Share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export class TrendingNewsList extends React.Component {
  getCreatedOnDate(date) {
    const myDate = new Date(date);
    const trendingNewsCreationDate =
      myDate.getDate() +
      '/' +
      (myDate.getMonth() + 1) +
      '/' +
      myDate.getFullYear();
    return trendingNewsCreationDate;
  }

  render() {
    const { classes, trendingNews, onTrendingNewsClick } = this.props;
    return (
      <Fragment>
        {trendingNews.map(trendingNew => (
          <TrendingNewsBox
            key={trendingNew._id}
            classes={classes}
            onTrendingNewsClick={onTrendingNewsClick}
            trendingNewsData={trendingNew}
            getCreatedOnDate={this.getCreatedOnDate}
          />
        ))}
      </Fragment>
    );
  }
}

TrendingNewsList.propTypes = {
  classes: PropTypes.object.isRequired,
  trendingNews: PropTypes.array.isRequired,
  onTrendingNewsClick: PropTypes.func,
};

const componentWithStyles = withStyles(styles)(TrendingNewsList);

export default componentWithStyles;
