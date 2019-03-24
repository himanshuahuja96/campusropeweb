/* eslint-disable prettier/prettier */
import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import BasicInfoEdit from './BasicInfoEdit';
import GeneralInfoEdit from './GeneralInfoEdit';
import StereoTypesEdit from './StereoTypesEdit';


const styles = theme => ({
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit,
  },
});

const DialogTitle = withStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.grey[500],
  },
}))(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="Close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    borderTop: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit,
  },
}))(MuiDialogActions);

const initalValue = {
  name: '',
  gender: '',
  email: '',
  homeTown: '',
  country: '',
  currentCity: '',
  religiousView: '',
  politicalView: '',
  workAndExperience: [],
  skills: [],
  college: '',
  picture: '',
  otherDegreeAndCourses: [],
  careerObjectives: [],
};

const getInitialValues = userProfile => {
  const updatedInitalValue = Object.assign({}, initalValue, {
    ...userProfile,
    profileId: userProfile.id,
    ...userProfile.profileOf,
  });
  return updatedInitalValue;
};

/* eslint react/prop-types: 0 */
class EditDialog extends React.PureComponent {

  renderTitle = () => {
    switch(this.props.editDialogType){
      case 'basic':
        return 'Basic Info';
      case 'general':
        return 'General Info';
      case 'stereo':
        return 'StereoTypes Info';
      default:
        return ''
    }
  }

  renderContent = (values,handleChange) => {
    switch(this.props.editDialogType){
      case 'basic':
        return <BasicInfoEdit values={values} handleChange={handleChange} />
      case 'general':
        return <GeneralInfoEdit values={values} handleChange={handleChange}/>;
      case 'stereo':
        return <StereoTypesEdit values={values} handleChange={handleChange}/>;
      default:
        return ''
    }
  }

  saveProfileInfo = (values, actions) => {
    this.props.handleClose();
    this.props.saveUserProfile(values, actions)
  }

  render() {
    const {
      editDialogExpand,
      handleClose,
      classes,
      userprofileInfo,
    } = this.props;
    return (
      <div>
        <Formik
          initialValues={getInitialValues(userprofileInfo)}
          validationSchema={Yup.object().shape({})}
          onSubmit={(values, actions) => this.saveProfileInfo(values,actions)}
        >
          {props => {
            const {
              values,
              handleChange,
              handleSubmit,
            } = props;
            return (
              <form
                className={classes.form}
                noValidate="noValidate"
                onSubmit={handleSubmit}
              >
                <Dialog
                  onClose={handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={editDialogExpand}
                >
                  <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {this.renderTitle()}
                  </DialogTitle>
                  <DialogContent>
                    {this.renderContent(values,handleChange)}
                  </DialogContent>
                  <DialogActions>
                    <Button type="submit" onClick={handleSubmit} color="primary" >
                      Save
                    </Button>
                  </DialogActions>
                </Dialog>
              </form>
            );
          }}
        </Formik>
      </div>
    );
  }
}

export default withStyles(styles)(EditDialog);
