import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import MuiDialogContent from '@material-ui/core/DialogContent';

const styles = (theme) => ({
  button: {
    margin: theme.spacing.unit,
  }
});

const DialogContent = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
}))(MuiDialogContent);

class MoreDialogOther extends React.Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog onClose={onClose} {...other}>
      <DialogContent>
            <Button variant="contained" color="primary" className={classes.button}>
              Report this user
            </Button>
            <Button variant="contained" color="secondary" className={classes.button}>
                  Block this user
            </Button>
            <Button variant="contained"
              onClick={onClose}
              color="default" className={classes.button}>
              Cancel
            </Button>
          </DialogContent>
      </Dialog>
    );
  }
}

MoreDialogOther.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

const MoreDialogOtherStylesWrapped = withStyles(styles)(MoreDialogOther);

export default MoreDialogOtherStylesWrapped;
