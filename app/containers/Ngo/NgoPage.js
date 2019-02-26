import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { withStyles } from '@material-ui/core/styles';
import { fetchNgoById } from './actions';
import { makeSelectInViewNgo } from './selectors';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  container: {
    textAlign: 'center',
    display: 'flex',
    flexWrap: 'wrap',
  },
  coverImage: {
    border: '1px solid blue',
    height: 300,
    position: 'relative',
  },
  infoGroup: {
    position: 'absolute',
    right: 20,
    bottom: 40,
  },
  logoImage: {
    border: '1px solid blue',
    height: 200,
    width: 200,
    margin: '-100px auto 0 auto',
    borderRadius: '50%',
  },
});

class NgoPage extends React.Component {
  componentDidMount() {
    const ngoId = this.props.match.params.id;
    console.log('ngoId', ngoId);
    this.props.fetchNgoById(ngoId);
  }

  render() {
    const { classes, ngo } = this.props;
    if (!ngo) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Typography variant="h4">{ngo.name}</Typography>
        <div className={classes.coverImage}>
          <div className={classes.infoGroup}>
            <Typography variant="body1">{ngo.ngoSiteLink}</Typography>
            <Typography variant="body1">{ngo.contactEmail}</Typography>
          </div>
        </div>
        <div className={classes.logoImage} />
        <div>
          <div>One</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  ngo: makeSelectInViewNgo(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    fetchNgoById: ngoId => dispatch(fetchNgoById(ngoId)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withStyles(styles),
  withConnect,
)(NgoPage);
