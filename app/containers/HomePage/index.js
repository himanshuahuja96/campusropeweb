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
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import {Switch, Route} from 'react-router-dom';
import AppBar from 'components/AppBar/Loadable';/* 
import AdminTask from 'containers/AssignAdminTask/Loadable';
import MyAdminTasks from 'containers/MyAdminTasks/Loadable';
import TrendingNews from 'containers/TrendingNews/Loadable';
import Ngo from 'containers/Ngo';
import Profile from 'containers/UserProfile/Loadable';
import Support from 'containers/Support/Loadable';
import Helpline from 'containers/Helpline/Loadable';*/
import AboutUs from 'containers/AboutUs/Loadable';
import PrivateRoute from 'components/PrivateRoute/Loadable';
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
export default class HomePage extends React.PureComponent {
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
              <Route exact path="/" component={(routeProps) => <HomeButtons menus={GuestHomeMenus}{...routeProps} /> } />
             {/*  <PrivateRoute path="/ngos" component={() => <h2>Ngos</h2>}/>
              <PrivateRoute path="/helpline" component={Helpline} />
              <PrivateRoute path="/admintaskassignment" component={AdminTask} />
              <PrivateRoute path="/my/admintasks" component={MyAdminTasks} />
              <PrivateRoute path="/news/trends" component={TrendingNews} />
              <PrivateRoute path="/ngos" component={Ngo} />
              <PrivateRoute path="/profile/:userId/about" component={About} />
              <PrivateRoute path="/profile/:userId" component={Profile} />
              <PrivateRoute path="/support" component={Support} /> */}
              <PrivateRoute path="/about" component={AboutUs} />
            </Switch>
          </CenterMenuWrapper>
        </CenterPanel>
      </React.Fragment>
    );
  }
}
