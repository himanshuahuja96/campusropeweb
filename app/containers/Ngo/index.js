/**
 *
 * Ngo
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Helmet } from 'react-helmet';
import { Switch } from 'react-router-dom';
import PrivateRoute from 'components/PrivateRoute';
import Content from 'components/Content/Loadable';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Loadable from 'react-loadable';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectNgo from './selectors';
import reducer from './reducer';
import saga from './saga';
import { DAEMON } from '../../utils/constants';
import EditNgo from './EditNgo';
import { fetchNgos } from './actions';
import NgoPage from './NgoPage';
/* eslint-disable*/

const MyNgos = Loadable({
  loader: () => import('./MyNgos'),
  loading: () => null,
});

const AllNgos = Loadable({
  loader: () => import('./AllNgos'),
  loading: () => null,
});

const NewNgo = Loadable({
  loader: () => import('./NewNgo'),
  loading: () => null,
});

const NgoVerification = Loadable({
  loader: () => import('./AdminVerification'),
  loading: () => null,
});

const NgoVerificationView = Loadable({
  loader: () => import('./NgoVerificationView'),
  loading: () => null,
});


/* eslint-disable react/prefer-stateless-function */
export class Ngo extends React.Component {

  componentDidMount() {
    console.log('componentDidMount')
    this.props.fetchNgos();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Ngo</title>
          <meta name="description" content="Description of Ngo" />
        </Helmet>
        <Content>
          <Switch>
            <PrivateRoute
              exact
              path="/ngos/:ngoId/verify/details"
              component={NgoVerificationView}
            />
            <PrivateRoute path="/ngos/new" component={NewNgo} />
            <PrivateRoute path="/ngos/my" component={MyNgos} />
            <PrivateRoute path="/ngos/:id" exact component={NgoPage} />
            <PrivateRoute path="/ngos/:id/edit" component={EditNgo} />
            <PrivateRoute
              path="/ngos/verification"
              component={NgoVerification}
            />
            <PrivateRoute exact path="/ngos" component={AllNgos} />
          </Switch>
        </Content>
      </div>
    );
  }
}

Ngo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ngo: makeSelectNgo(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    fetchNgos: state => dispatch(fetchNgos(state)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'ngo', reducer });
const withSaga = injectSaga({ key: 'ngo', saga, mode: DAEMON });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Ngo);
