/**
 *
 * GuestHome
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Switch } from 'react-router-dom';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import AdminTask from 'containers/AssignAdminTask/Loadable';
import MyAdminTasks from 'containers/MyAdminTasks/Loadable';
import TrendingNews from 'containers/TrendingNews/Loadable';
import Ngo from 'containers/Ngo';
import Profile from 'containers/UserProfile/Loadable';
import Support from 'containers/Support/Loadable';
import Helpline from 'containers/Helpline/Loadable';
import AboutUs from 'containers/AboutUs/Loadable';
import PrivateRoute from 'components/PrivateRoute/Loadable';
import CenterMenus from 'components/CenterMenus/Loadable';
import About from '../UserProfile/components/About';

import {
  makeSelectLoggedUserHomeMenus,
} from '../../store/loggeduser/selectors';
import reducer from './reducer';
import saga from './saga';


/* eslint-disable react/prefer-stateless-function */
export class GuestHome extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Description of GuestHome" />
        </Helmet>
      <React.Fragment>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Description of Home" />
        </Helmet>
        <Switch>
          <Route
            exact
            path="/"
            component={() => <CenterMenus menus={this.props.homeMenus} />}
          />
          <PrivateRoute path="/helpline" component={Helpline} />
          <PrivateRoute path="/admintaskassignment" component={AdminTask} />
          <PrivateRoute path="/my/admintasks" component={MyAdminTasks} />
          <PrivateRoute path="/news/trends" component={TrendingNews} />
          <PrivateRoute path="/ngos" component={Ngo} />
          <PrivateRoute path="/profile/:userId/about" component={About} />
          <PrivateRoute path="/profile/:userId" component={Profile} />
          <PrivateRoute path="/support" component={Support} />
          <PrivateRoute path="/about" component={AboutUs} />
        </Switch>
      </React.Fragment>
      </div>
    );
  }
}

GuestHome.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homeMenus: makeSelectLoggedUserHomeMenus(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'guestHome', reducer });
const withSaga = injectSaga({ key: 'guestHome', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(GuestHome);
