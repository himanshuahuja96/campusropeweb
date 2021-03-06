/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Switch, Route } from 'react-router-dom';
import NewAppBar from 'components/NewAppBar/Loadable';
import PublicAppBar from 'components/PublicAppBar/Loadable';
import Drawer from 'components/Drawer';
import Profile from 'containers/UserProfile/Loadable';
import HeaderTabs from 'components/HeaderTabs/Loadable';
import AboutUser from 'containers/AboutUser/Loadable';
import HelplineUserList from 'containers/HelplineUserList/Loadable';
import HelplineAdminList from 'containers/HelplineAdminList/Loadable';
import HelplineAdd from 'containers/HelplineAdd/Loadable';
import HelplineEdit from 'containers/HelplineEdit/Loadable';
import HelplineView from 'containers/HelplineView/Loadable';

import NgoVerificationView from 'containers/NgoVerificationView/Loadable';
import NgoAdd from 'containers/NgoAdd/Loadable';
import MyNgos from 'containers/MyNgos/Loadable';
import NgoView from 'containers/NgoView/Loadable';
import NgoEdit from 'containers/NgoEdit/Loadable';
import NgoVerificationList from 'containers/NgoVerificationList/Loadable';
import AssignAdminTask from 'containers/AssignAdminTask/Loadable';
import NgoUserList from 'containers/NgoUserList/Loadable';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectHome from './selectors';
import reducer from './reducer';
import saga from './saga';

import PrivateRoute from '../../components/PrivateRoute/Loadable';
import HomeButtons from './HomeButtons';
import { changeRoute, routeToUserProfile, homeMounted } from './actions';
import {
  makeSelectLoggedUserMenus,
  isLoggedIn,
  makeSelectLoggedUser,
  makeSelectLoggedUserHomeMenus,
} from '../../store/loggeduser/selectors';

const CenterPanel = styled.div`
  background: #fff;
  position: relative;
  max-width: 58em;
  margin: 0 auto;
  padding: 1.5rem;
  min-height: 91vh;
`;
const CenterMenuWrapper = styled.div``;
/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  state = {
    drawerOpen: false,
  };

  componentDidMount() {
    this.props.homeMounted();
  }

  toggleDrawer = opened => {
    this.setState({
      // eslint-disable-next-line react/no-access-state-in-setstate
      drawerOpen: opened || !this.state.drawerOpen,
    });
  };

  gotoUserProfile = () => {
    this.props.dispatch(changeRoute(routeToUserProfile));
  };

  gotoSelectedRoute = toRoute => {
    this.props.dispatch(push(toRoute));
  };

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Homepage of Campusrope" />
        </Helmet>
        {isLoggedIn() ? (
          <NewAppBar
            gotoUserProfile={this.gotoUserProfile}
            gotoSelectedRoute={this.gotoSelectedRoute}
            toggleDrawer={this.toggleDrawer}
          />
        ) : (
          <PublicAppBar />
        )}
        <Drawer
          open={!!this.state.drawerOpen}
          toggleDrawer={this.toggleDrawer}
          dispatch={this.props.dispatch}
          menuItems={this.props.drawerMenus}
          loggedUserInfo={this.props.loggedUserInfo}
        />
        <CenterPanel>
          {!isLoggedIn() && <HeaderTabs />}
          <CenterMenuWrapper>
            <Switch>
              <Route
                exact
                path="/"
                component={routerProps => (
                  <HomeButtons menus={this.props.homeMenus} {...routerProps} />
                )}
              />
              <PrivateRoute
                path="/profile/:userId/about"
                component={AboutUser}
              />
              <PrivateRoute path="/profile/:userId" component={Profile} />
              <Route exact path="/helpline" component={HelplineUserList} />
              <Route
                exact
                path="/helpline/:helplineId/details"
                component={HelplineView}
              />
              <PrivateRoute
                exact
                path="/admin/helpline/:helplineId/edit"
                component={HelplineEdit}
              />
              <PrivateRoute
                exact
                path="/admin/helpline"
                component={HelplineAdminList}
              />
              <PrivateRoute
                exact
                path="/helpline/new"
                component={HelplineAdd}
              />
              <PrivateRoute
                exact
                path="/ngos/:ngoId/verify/details"
                component={NgoVerificationView}
              />
              <PrivateRoute path="/ngos/new" component={NgoAdd} />
              <PrivateRoute path="/ngos/my" component={MyNgos} />
              <PrivateRoute path="/ngos/:id" exact component={NgoView} />
              <PrivateRoute path="/ngos/:id/edit" component={NgoEdit} />
              <PrivateRoute
                path="/ngos/verification"
                component={NgoVerificationList}
              />
              <Route exact path="/ngos" component={NgoUserList} />
              <PrivateRoute
                path="/admin/task/assignment"
                component={AssignAdminTask}
              />
            </Switch>
          </CenterMenuWrapper>
        </CenterPanel>
      </React.Fragment>
    );
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  homeMounted: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  home: makeSelectHome(),
  drawerMenus: makeSelectLoggedUserMenus(),
  loggedUserInfo: makeSelectLoggedUser(),
  homeMenus: makeSelectLoggedUserHomeMenus(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    homeMounted: () => dispatch(homeMounted()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
