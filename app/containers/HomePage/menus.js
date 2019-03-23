import React from 'react';
import {
  AccountBalance,
  SettingsPhone,
  InfoOutlined,
} from 'components/MaterialIcons';

export const GuestHomeMenus = [
  {
    title: 'NGOs',
    iconBgColor: '#FF6D00',
    icon: <AccountBalance />,
    linkTo: '/ngos',
  },
  {
    title: 'Helpline',
    iconBgColor: '#D81B60',
    icon: <SettingsPhone />,
    linkTo: '/helpline',
  },
  {
    title: 'About Us',
    iconBgColor: '#006064',
    icon: <InfoOutlined />,
    linkTo: '/about',
  },
];
