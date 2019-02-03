import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class LongMenu extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={open ? 'long-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClickOpen}
        >
          <MoreVertIcon />
        </IconButton>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
        >
          <DialogContent>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Copy user profile link
            </Button>
            <Button
              variant="contained"
              onClick={this.handleClose}
              color="default"
              className={classes.button}
            >
              Cancel
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}
const LongMenuStylesWrapped = withStyles(styles)(LongMenu);
export default LongMenuStylesWrapped;
