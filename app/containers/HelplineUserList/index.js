/**
 *
 * HelplineUserList
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectHelplineUserList from './selectors';
import reducer from './reducer';
import saga from './saga';
import { fetchHelplines } from './actions';
import { makeSelectStates } from '../../store/constants/selectors';

const HelplineBox = ({ helplineData }) => (
  <Card raised>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {helplineData.name}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

/* eslint-disable react/prefer-stateless-function */
class HelplineUserList extends React.Component {
  state = {
    selectedOperatingState: 'All India',
  };

  onStateChanged(state) {
    this.setState({ selectedOperatingState: state });
    fetchHelplines(state);
  }

  componentDidMount() {
    fetchHelplines();
  }

  render() {
    const { selectedOperatingState } = this.state;
    const { helplineUserList, states } = this.props;
    const allStates = states.concat(['All India']);
    return (
      <div>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="state">State</InputLabel>
          <Select
            value={selectedOperatingState}
            onChange={e => this.onStateChanged(e.target.value)}
            input={<Input id="state" name="state" />}
          >
            {allStates.map(state => (
              <MenuItem key={state} value={state}>
                {state}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {helplineUserList.map((helpline, index) => (
          <HelplineBox key={index} helplineData={helpline} />
        ))}
      </div>
    );
  }
}

HelplineUserList.propTypes = {
  helplineUserList: PropTypes.array.isRequired,
  states: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  helplineUserList: makeSelectHelplineUserList(),
  states: makeSelectStates(),
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

const withReducer = injectReducer({ key: 'helplineUserList', reducer });
const withSaga = injectSaga({ key: 'helplineUserList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HelplineUserList);
