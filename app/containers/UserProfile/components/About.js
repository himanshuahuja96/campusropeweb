import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import { push } from 'react-router-redux';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Add from '@material-ui/icons/Add';
import { Formik } from 'formik';
import withStyles from '@material-ui/core/styles/withStyles';
import { createStructuredSelector } from 'reselect';
import ProfileTabType from './ProfileTabTypeModel';
import { makeSelectLoggedUser } from '../../../store/loggeduser/selectors';
import BasicInfo from './BasicInfo';
import StereoTypes from './StereoTypes';
import GeneralInfo from './GeneralInfo';

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

const MultiInputComponent = ({
  arrayHelpers,
  values,
  classes,
  label,
  handleChange,
  name,
}) => (
  <div>
    {values.length ? (
      values.map((value, index) => (
        <div key={name} className={classes.multiInputWrapper}>
          <TextField
            id={index}
            name={name + index}
            label={label}
            className={classes.multiInput}
            value={value}
            onChange={handleChange}
          />

          <Button
            variant="contained"
            color="primary"
            className={classes.multiInputBtn}
            onClick={() => arrayHelpers.insert(index, '')}
          >
            <Add />
          </Button>

          {values.length > 1 && (
            <Button
              variant="contained"
              onClick={() => arrayHelpers.remove(index)}
              className={classNames(classes.multiInputBtn, classes.deleteBtn)}
            >
              <Delete />
            </Button>
          )}
        </div>
      ))
    ) : (
      <Button
        variant="contained"
        color="primary"
        onClick={() => arrayHelpers.push('')}
      >
        Add {name}
      </Button>
    )}
  </div>
);

/* eslint react/prop-types: 0 */
class AboutUserComponent extends React.Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  handleBackClick = userinfo => {
    this.props.dispatch(push(`/profile/${userinfo._id}`));
  };

  render() {
    const {
      classes,
      userProfile = {},
      handleProfileSave,
      loggedUserInfo,
    } = this.props;
    const { expanded } = this.state;
    const TAB_TYPE_MAP = ProfileTabType.typeTypeMap;
    return (
      <Formik
        initialValues={getInitialValues(userProfile)}
        validationSchema={Yup.object().shape({})}
        onSubmit={(values, actions) => handleProfileSave(values, actions)}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleSubmit,
            setFieldValue,
          } = props;
          return (
            <form
              className={classes.form}
              noValidate="noValidate"
              onSubmit={handleSubmit}
            >
              <Typography variant="h5" className="text-center">
                About
              </Typography>

              <BasicInfo
                errors={errors}
                touched={touched}
                values={values}
                expanded={true}
                handlePanelChange={this.handleChange('panel1')}
                handleChange={handleChange}
              />

              <StereoTypes
                errors={errors}
                touched={touched}
                values={values}
                expanded={expanded === 'panel2'}
                handlePanelChange={this.handleChange('panel2')}
                handleChange={handleChange}
              />

              <GeneralInfo
                errors={errors}
                touched={touched}
                values={values}
                expanded={expanded === 'panel3'}
                handlePanelChange={this.handleChange('panel3')}
                handleChange={handleChange}
              />

              <div className={classes.aboutUserBtnWrapper}>
                <Button
                  onClick={() => this.handleBackClick(loggedUserInfo)}
                  variant="contained"
                  className={classes.cancel}
                  disabled={isSubmitting}
                >
                  {' '}
                  Back
                </Button>
              </div>
            </form>
          );
        }}
      </Formik>
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
  loggedUserInfo: makeSelectLoggedUser(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const componentWithStyles = withStyles(styles)(AboutUserComponent);

export default compose(withConnect)(componentWithStyles);
