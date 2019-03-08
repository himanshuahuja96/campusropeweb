/**
 *
 * TrendingNewsEdit
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import Content from 'components/Content/Loadable';
import YouTube from 'react-youtube';
import { push } from 'react-router-redux';

import { Formik } from 'formik';
import withStyles from '@material-ui/core/styles/withStyles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import * as Yup from 'yup';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Upload from 'components/Upload/Loadable';
import _isEmpty from 'lodash/isEmpty';

import { makeSelectStatesForOptions } from '../../store/constants/selectors';
import {
  fetchTrendingNewsById,
  fetchNewsClients,
  updateTrendingNewsById,
} from './actions';
import {
  makeSelectNewsClientsForOptions,
  makeSelectSelectedTrendingNews,
} from './selectors';

const styles = theme => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    backgroundPosition: 'center' /* Center the image */,
    backgroundRepeat: 'no-repeat' /* Do not repeat the image */,
    backgroundSize: 'cover',
  },
  paper: {
    margin: '0px auto',
    textAlign: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`,
    width: `calc(100% - 24px)`,
    maxWidth: 350,
    minHeight: 400,
  },
  error: {
    color: 'red',
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit,
  },
  lockIconWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    marginTop: theme.spacing.unit * 2,
  },
  cancel: {
    marginLeft: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
  },
  uploadBtn: {
    marginLeft: 0,
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
  photoPic: {
    float: 'left',
    width: '10%',
    height: 'auto',
  },
  photoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  card: {
    margin: theme.spacing.unit * 4,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
});

/* eslint-disable */
const opts = {
  height: '390',
  width: '100%',
};
export class TrendingNewsEdit extends React.Component {
  width = 100;
  height = 100;

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  onSubmit(values, actions) {
    this.props.updateHelplineById({
      _id: this.props.match.params.trendingNewsId,
      data: values,
      actions,
    });
  }

  componentDidMount() {
    (this.width = document
      .querySelector('#content')
      .getBoundingClientRect().width),
      (this.height = document
        .querySelector('#content')
        .getBoundingClientRect().height);
    const trendingNewsId = this.props.match.params.trendingNewsId;
    this.props.fetchNewsClients();
    this.props.fetchTrendingNewsById(trendingNewsId);
  }

  onYoutubeLinkChange(event, setFieldValue) {
    const playBackId = event.target.value.substring(
      event.target.value.length - 11,
    ); // no of characters in playbackid
    setFieldValue('youtube_link', playBackId);
  }

  onCancel() {
    this.props.dispatch(push('/news/trends/admin/'));
  }
  render() {
    const { selectedTrendingNews } = this.props;
    return (
      <Content>
        {selectedTrendingNews.headline && (
          <Formik
            initialValues={{
              headline: selectedTrendingNews.headline,
              content: selectedTrendingNews.content,
              state: selectedTrendingNews.state,
              newsClient: selectedTrendingNews.newsClient._id,
              photo_urls: selectedTrendingNews.photo_urls,
              cover_photo: selectedTrendingNews.cover_photo,
              youtube_link: selectedTrendingNews.youtube_link,
            }}
            validationSchema={Yup.object().shape({
              headline: Yup.string().required('please provide headline'),
              content: Yup.string().required('Please provide content'),
              state: Yup.string().required(
                'Please choose any one of the State',
              ),
              newsClient: Yup.string().required(
                'Please choose any one of the news Clients',
              ),
            })}
            onSubmit={(values, actions) => this.onSubmit(values, actions)}
          >
            {props => {
              const {
                values,
                touched,
                errors,
                handleChange,
                setFieldValue,
                isSubmitting,
                handleSubmit,
              } = props;
              const { classes, states, newsClients } = this.props;
              return (
                <form
                  className={classes.form}
                  noValidate="noValidate"
                  onSubmit={handleSubmit}
                >
                  <Grid container spacing={16}>
                    <Grid item xs={12} sm={12} lg={6}>
                      <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="headline">Headline</InputLabel>
                        <Input
                          id="headline"
                          name="headline"
                          multiline
                          rows="4"
                          autoComplete="headline"
                          value={values.headline}
                          onChange={handleChange}
                          autoFocus
                        />{' '}
                        {touched.headline &&
                          errors.headline && (
                            <FormHelperText className={classes.error}>
                              {errors.headline}
                            </FormHelperText>
                          )}
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6}>
                      <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="content">Content</InputLabel>
                        <Input
                          id="content"
                          name="content"
                          multiline
                          rows="4"
                          autoComplete="content"
                          value={values.content}
                          onChange={handleChange}
                        />{' '}
                        {touched.content &&
                          errors.content && (
                            <FormHelperText className={classes.error}>
                              {errors.content}
                            </FormHelperText>
                          )}
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <FormControl margin="normal" fullWidth required>
                        <InputLabel htmlFor="state">State</InputLabel>
                        <Select
                          value={values.state}
                          onChange={handleChange}
                          input={<Input id="state" name="state" />}
                        >
                          {states.map(state => (
                            <MenuItem key={state.label} value={state.value}>
                              {state.value}
                            </MenuItem>
                          ))}
                        </Select>
                        {touched.state &&
                          errors.state && (
                            <FormHelperText className={classes.error}>
                              {errors.state}
                            </FormHelperText>
                          )}
                      </FormControl>
                    </Grid>

                    <Button
                      variant="contained"
                      onClick={() =>
                        this.props.dispatch(
                          push('/news/trends/admin/client/manage'),
                        )
                      }
                      className={classes.cancel}
                    >
                      {' '}
                      Manage Clients
                    </Button>

                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <FormControl margin="normal" fullWidth required>
                        <InputLabel htmlFor="state">Client</InputLabel>
                        <Select
                          value={values.newsClient}
                          onChange={handleChange}
                          input={<Input id="newsClient" name="newsClient" />}
                        >
                          {newsClients.map(client => (
                            <MenuItem key={client.value} value={client.value}>
                              <Avatar
                                alt="Remy Sharp"
                                src={client.logourl}
                                className={classes.avatar}
                              />
                              {client.label}
                            </MenuItem>
                          ))}
                        </Select>
                        {touched.newsClient &&
                          errors.newsClient && (
                            <FormHelperText className={classes.error}>
                              {errors.newsClient}
                            </FormHelperText>
                          )}
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <Upload
                        className={classes.uploadBtn}
                        text="Upload Photos"
                        onUploaded={res =>
                          setFieldValue(
                            'photo_urls',
                            res.map(pic => pic.secure_url),
                          )
                        }
                      />
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        {!_isEmpty(values.photo_urls) &&
                          values.photo_urls.map(pic => (
                            <Card key={pic} className={classes.card}>
                              <CardMedia
                                component="img"
                                alt="trending news image"
                                className={classes.media}
                                width={this.width}
                                src={pic}
                                title="Contemplative Reptile"
                              />
                            </Card>
                          ))}
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <Upload
                        className={classes.uploadBtn}
                        text="Upload Cover Photo"
                        onUploaded={res =>
                          setFieldValue('cover_photo', res[0].secure_url)
                        }
                      />
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        {!_isEmpty(values.cover_photo) && (
                          <Card className={classes.card}>
                            <CardMedia
                              component="img"
                              alt="trending news image"
                              className={classes.media}
                              width={this.width}
                              src={values.cover_photo}
                              title="Contemplative Reptile"
                            />
                          </Card>
                        )}
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={12} md={12}>
                      <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="youtube_link">
                          Embed YouTube Link
                        </InputLabel>
                        <Input
                          id="youtube_link"
                          name="youtube_link"
                          autoComplete="youtube_link"
                          value={values.youtube_link}
                          onChange={e =>
                            this.onYoutubeLinkChange(e, setFieldValue)
                          }
                        />{' '}
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      {!_isEmpty(values.youtube_link) && (
                        <YouTube
                          videoId={values.youtube_link}
                          opts={opts}
                          onReady={this._onReady}
                        />
                      )}
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={isSubmitting}
                      >
                        {' '}
                        Update
                      </Button>

                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => this.onCancel()}
                        className={classes.cancel}
                        disabled={isSubmitting}
                      >
                        {' '}
                        Cancel
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              );
            }}
          </Formik>
        )}
      </Content>
    );
  }
}

TrendingNewsEdit.propTypes = {
  classes: PropTypes.object,
  states: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  states: makeSelectStatesForOptions(),
  newsClients: makeSelectNewsClientsForOptions(),
  selectedTrendingNews: makeSelectSelectedTrendingNews(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    fetchTrendingNewsById: trendingNewsId =>
      dispatch(fetchTrendingNewsById(trendingNewsId)),
    fetchNewsClients: () => dispatch(fetchNewsClients()),
    updateTrendingNewsById: updNews =>
      dispatch(updateTrendingNewsById(updNews)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const componentWithStyles = withStyles(styles)(TrendingNewsEdit);

export default compose(withConnect)(componentWithStyles);
