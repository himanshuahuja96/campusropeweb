/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';

import GuestHome from 'containers/GuestHome/Loadable';
import Login from 'containers/Login/Loadable';
import Signup from 'containers/Signup/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: pink,
    tonalOffset: 0.2,
  },
  typography: {
    useNextVariants: true,
  },
});

export default function App() {
  return (
    <div>
      <CssBaseline>
        <MuiThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route path="/" component={GuestHome} />

            <Route component={NotFoundPage} />
          </Switch>
        </MuiThemeProvider>
      </CssBaseline>
    </div>
  );
}
