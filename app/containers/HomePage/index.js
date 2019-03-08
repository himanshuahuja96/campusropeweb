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

import AppBar from 'components/AppBar/Loadable';
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
            <HomeButtons menus={GuestHomeMenus} />
          </CenterMenuWrapper>
        </CenterPanel>
      </React.Fragment>
    );
  }
}
