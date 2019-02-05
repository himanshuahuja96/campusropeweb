import React from 'react';
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

/* eslint react/prop-types: 0 */
class EditDialog extends React.Component {
  render() {
    const {
      editDialogExpand,
      handleClose,
      basicInfoEditView,
      generalInfoEditView,
      stereoTypesInfoEditView,
    } = this.props;
    return (
      <div>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={editDialogExpand}
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            {basicInfoEditView && 'Basic Info'}
            {generalInfoEditView && 'General Info'}
            {stereoTypesInfoEditView && 'StereoTypes Info'}
          </DialogTitle>
          <DialogContent>
            {basicInfoEditView && <BasicInfoEdit />}
            {generalInfoEditView && <GeneralInfoEdit />}
            {stereoTypesInfoEditView && <StereoTypesEdit />}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default EditDialog;
