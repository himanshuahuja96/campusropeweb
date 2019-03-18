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
import { Switch, Route } from 'react-router-dom';
import AppBar from 'components/AppBar/Loadable';
import Profile from 'containers/UserProfile/Loadable';
import AboutUser from 'containers/AboutUser/Loadable';
import HelplineUserList from 'containers/HelplineUserList/Loadable';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectHome from './selectors';
import reducer from './reducer';
import saga from './saga';

import PrivateRoute from '../../components/PrivateRoute/Loadable';
import HeaderTabs from '../../components/HeaderTabs/Loadable';
import { GuestHomeMenus } from './menus';
import HomeButtons from './HomeButtons';

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
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Homepage of Campusrope" />
        </Helmet>
        <AppBar />
        <HeaderTabs />
        <CenterPanel>
          <CenterMenuWrapper>
            <Switch>
              <Route
                exact
                path="/"
                component={routeProps => (
                  <HomeButtons menus={GuestHomeMenus} {...routeProps} />
                )}
              />
              <Route path="/helpline" component={HelplineUserList} />
              <PrivateRoute
                path="/profile/:userId/about"
                component={AboutUser}
              />
              <PrivateRoute path="/profile/:userId" component={Profile} />
            </Switch>
          </CenterMenuWrapper>
        </CenterPanel>
      </React.Fragment>
    );
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  home: makeSelectHome(),
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

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
