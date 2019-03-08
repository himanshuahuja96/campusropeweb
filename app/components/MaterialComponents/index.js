/**
 *
 * MaterialComponents
 *
 */

import React from 'react';
export const Button = React.lazy(() => import('@material-ui/core/Button'));
export const Typography = React.lazy(() =>
  import('@material-ui/core/Typography'),
);

export const AppBar = React.lazy(() => import('@material-ui/core/AppBar'));
export const Toolbar = React.lazy(() => import('@material-ui/core/Toolbar'));

export const IconButton = React.lazy(() =>
  import('@material-ui/core/IconButton'),
);

export const InputBase = React.lazy(() =>
  import('@material-ui/core/InputBase'),
);
export const Badge = React.lazy(() => import('@material-ui/core/Badge'));
export const Menu = React.lazy(() => import('@material-ui/core/Menu'));

export const MenuItem = React.lazy(() => import('@material-ui/core/MenuItem'));
export const Tabs = React.lazy(() => import('@material-ui/core/Tabs'));
export const Tab = React.lazy(() => import('@material-ui/core/Tab'));

