import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { replace } from 'connected-react-router';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { HomeIcon, RssFeedIcon, LockIcon } from 'components/MaterialIcons';

const CenterPanel = styled.div`
  position: relative;
  max-width: 58em;
  margin: 0 auto;
  flexGrow: 1,
  width: '100%',
  backgroundColor: 'white',
`;
function Headertabs({ dispatch }) {
  const [value, setValue] = React.useState(1);

  function handleChange(event, newValue) {
    switch (newValue) {
      case 0:
        dispatch(replace('/feeds'));
        break;
      case 1:
        dispatch(replace('/'));
        break;
      case 2:
        dispatch(replace('/login'));
        break;
      default:
        setValue(newValue);
    }
    setValue(newValue);
  }

  return (
    <CenterPanel>
      <AppBar position="static" color="inherit">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Feeds" icon={<RssFeedIcon />} />
          <Tab label="Home" icon={<HomeIcon />} />
          <Tab label="SignUp" icon={<LockIcon />} />
        </Tabs>
      </AppBar>
    </CenterPanel>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

Headertabs.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default withConnect(Headertabs);
