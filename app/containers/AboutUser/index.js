/* eslint-disable no-underscore-dangle */
/**
 *
 * AboutUser
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Button from '@material-ui/core/Button';
import { push } from 'react-router-redux';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { createStructuredSelector } from 'reselect';
import { makeSelectLoggedUser } from '../../store/loggeduser/selectors';
import BasicInfo from './BasicInfo';
import StereoTypes from './StereoTypes';
import GeneralInfo from './GeneralInfo';
import EditDialog from './EditDialog';
import { saveUserProfile } from '../UserProfile/actions';

const styles = theme => ({
  aboutPaper: {
    padding: '10px 15px',
  },
  error: {
    color: 'red',
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {},
  cancel: {
    background: '#ffc400',
    marginLeft: '10px',
    color: 'white',

    '&:hover': {
      background: '#ecb809',
    },
  },
  button: {
    marginBottom: theme.spacing.unit,
    marginTop: theme.spacing.unit,
    color: '#1976d2',
    float: 'right',
    fontSize: 12,
  },
  panelDetails: {
    flexDirection: 'column',
  },
  aboutUserBtnWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '10px',
  },
  multiInputBtn: {
    padding: '5px',
    minWidth: '30px',
    height: '40px',
    width: '40px',
    marginLeft: 10,
  },
  multiInputWrapper: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  multiInput: {
    flex: 1,
  },
  deleteBtn: {
    background: '#e63d3d',
    color: 'white',

    '&:hover': {
      background: '#d43a3a',
    },
  },
});

/* eslint-disable react/prefer-stateless-function */
export class AboutUser extends React.Component {
  state = {
    expanded: 'panel1',
    editDialogExpand: false,
    editDialogType: 'basic',
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  handleBackClick = userinfo => {
    this.props.dispatch(push(`/profile/${userinfo._id}`));
  };

  handleClose = () => {
    this.setState({
      editDialogExpand: false,
    });
  };

  openDialog = type => {
    this.setState({
      editDialogExpand: true,
      editDialogType: type,
    });
  };

  render() {
    const { classes, aboutUser } = this.props;
    const { expanded, editDialogExpand, editDialogType } = this.state;
    return (
      <React.Fragment>
        <Typography variant="h5" className="text-center">
          About
        </Typography>

        <BasicInfo
          openDialog={this.openDialog}
          expanded={expanded === 'panel1'}
          handlePanelChange={this.handleChange('panel1')}
        />

        <StereoTypes
          openDialog={this.openDialog}
          expanded={expanded === 'panel2'}
          handlePanelChange={this.handleChange('panel2')}
        />

        <GeneralInfo
          openDialog={this.openDialog}
          expanded={expanded === 'panel3'}
          handlePanelChange={this.handleChange('panel3')}
        />

        <div className={classes.aboutUserBtnWrapper}>
          <Button
            onClick={() => this.handleBackClick(aboutUser)}
            variant="contained"
            className={classes.cancel}
          >
            {' '}
            Back
          </Button>
        </div>

        <EditDialog
          editDialogExpand={editDialogExpand}
          handleClose={this.handleClose}
          saveUserProfile={this.props.saveUserProfile}
          userprofileInfo={aboutUser}
          editDialogType={editDialogType}
        />
      </React.Fragment>
    );
  }
}

AboutUser.propTypes = {
  dispatch: PropTypes.func.isRequired,
  saveUserProfile: PropTypes.func.isRequired,
  aboutUser: PropTypes.object,
  classes: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  aboutUser: makeSelectLoggedUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    saveUserProfile: (payload, actions) =>
      dispatch(saveUserProfile(payload, actions)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const componentWithStyles = withStyles(styles)(AboutUser);

export default compose(withConnect)(componentWithStyles);
