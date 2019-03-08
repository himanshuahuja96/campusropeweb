import React from 'react';
import {
  AccountBalance,
  Title,
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
    title: 'Trending News',
    iconBgColor: '#D81B60',
    icon: <Title />,
    linkTo: '/helpline',
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
