/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import Login from 'containers/Login/Loadable';
import Signup from 'containers/Signup/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import CircularProgress from '@material-ui/core/CircularProgress';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </Suspense>
  );
}
