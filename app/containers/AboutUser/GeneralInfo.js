import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import { makeSelectUserProfileInfo } from './selectors';

import EditDialog from './EditDialog';

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
  editBtn: {
    position: 'absolute',
    top: 15,
    right: 50,
    fontSize: 20,
    cursor: 'pointer',
  },
  infoLabel: {
    display: 'inline-block',
    marginLeft: 15,
  },
  deleteBtn: {
    background: '#e63d3d',
    color: 'white',

    '&:hover': {
      background: '#d43a3a',
    },
  },
});

/* eslint react/prop-types: 0 */
class AboutUserComponent extends React.Component {
  state = {
    expanded: null,
    editDialogExpand: false,
    generalInfoEditView: null,
  };

  handleEditDialogPanel = () => {
    this.setState({
      editDialogExpand: true,
      generalInfoEditView: true,
    });
  };

  handleClose = () => {
    this.setState({
      editDialogExpand: false,
    });
  };

  renderLabelsAndValues = (label, value) => {
    const { classes } = this.props;
    return (
      <Typography variant="h6" gutterBottom>
        {label} :
        <Typography variant="button" gutterBottom className={classes.infoLabel}>
          {value}
        </Typography>
      </Typography>
    );
  };

  handlePanelChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const {
      classes,
      userprofileInfo,
      handlePanelChange,
      expanded,
    } = this.props;
    const { editDialogExpand, generalInfoEditView } = this.state;
    return (
      <ExpansionPanel expanded={expanded} onChange={handlePanelChange}>
        {expanded && (
          <div className={classes.editBtn}>
            <EditIcon onClick={this.handleEditDialogPanel} />
          </div>
        )}
        <EditDialog
          editDialogExpand={editDialogExpand}
          handleClose={this.handleClose}
          generalInfoEditView={generalInfoEditView}
        />
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="body1" className={classes.heading}>
            General Information
          </Typography>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails className={classes.panelDetails}>
          <Grid container spacing={16}>
            <Grid item xs={12} sm={12} lg={6}>
              {this.renderLabelsAndValues(
                'Work And Experience',
                'Work And Experience',
              )}
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              {this.renderLabelsAndValues('Skills', 'Skills')}
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              {this.renderLabelsAndValues('College', 'College')}
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              {this.renderLabelsAndValues(
                'Other Degree and Courses',
                'Other Degree and Courses',
              )}
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              {this.renderLabelsAndValues(
                'Career Objectives',
                'Career Objectives',
              )}
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

AboutUserComponent.propTypes = {
  classes: PropTypes.object,
};

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

const mapStateToProps = createStructuredSelector({
  userprofileInfo: makeSelectUserProfileInfo(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const componentWithStyles = withStyles(styles)(AboutUserComponent);

export default compose(withConnect)(componentWithStyles);