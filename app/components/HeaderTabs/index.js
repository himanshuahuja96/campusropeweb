import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { HomeIcon, RssFeedIcon, PersonAdd } from 'components/MaterialIcons';
import { isLoggedIn } from '../../store/loggeduser/selectors';

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
        dispatch(push('/feeds'));
        break;
      case 1:
        dispatch(push('/'));
        break;
      case 2:
        dispatch(push('/login'));
        break;
      default:
        setValue(newValue);
    }
    setValue(newValue);
  }

  return (
    <CenterPanel>
      <AppBar position="static" color="inherit" style={{ boxShadow: 'none' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor={isLoggedIn() ? 'primary' : 'secondary'}
          textColor={isLoggedIn() ? 'primary' : 'secondary'}
          centered
        >
          <Tab
            style={{ textTransform: 'lowercase' }}
            label="Feeds"
            icon={<RssFeedIcon />}
          />
          <Tab
            style={{ textTransform: 'lowercase' }}
            label="Home"
            icon={<HomeIcon />}
          />
          <Tab
            style={{ textTransform: 'lowercase' }}
            label="SignUp"
            icon={<PersonAdd />}
          />
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
