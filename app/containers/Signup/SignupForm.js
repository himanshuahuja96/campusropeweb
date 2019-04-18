import React from 'react';
import Recaptcha from 'react-recaptcha';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import withStyles from '@material-ui/core/styles/withStyles';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { Button, CircularProgress } from '@material-ui/core';
import { Formik } from 'formik';
import * as Yup from 'yup';


const styles = () => ({
  backBtn : {
    marginTop : 10,
    '&:hover':{
      backgroundColor: "#db3236",
    },
  },
});


/* eslint react/prop-types: 0 */
/* eslint prettier/prettier: 0 */
class SignupForm extends React.Component {
  state = {
    isVerified: false,
    recapchaErrorMsg: null,
  };

  onSubmit = (values, actions) => {
    if (this.state.isVerified) {
      this.props.handleSignUp(values, actions);
    } else {
      this.setState({
        recapchaErrorMsg: 'Please verify that you are not a robot.',
      });
      actions.setSubmitting(false);
    }
  };

  render() {
    const { classes, routeToLogin } = this.props;
    return (
      <Formik
        initialValues={{
          name: '',
          lastName: '',
          email: '',
          gender: '',
          password: '',
          passwordConfirm: '',
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('please provide name'),
          email: Yup.string()
            .email('please provide a valid email')
            .required('Please provide email'),
          password: Yup.string().required('please provide passoword'),
          passwordConfirm: Yup.string()
            .oneOf([Yup.ref('password')], "Passwords don't match")
            .required('Please confirm your password'),
        })}
        onSubmit={(values, actions) => {
          // eslint-disable-next-line no-param-reassign
          values.name = `${values.name  } ${values.lastName}`;
          this.onSubmit(values, actions)}
        }
      >
        {props => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleSubmit,
          } = props;
          return (
            <form
              className={classes.form}
              noValidate="noValidate"
              onSubmit={handleSubmit}
            >
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="name">First Name</InputLabel>
                <Input
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={values.name}
                  onChange={handleChange}
                  autoFocus
                />{' '}
                {touched.name &&
                  errors.name && (
                  <FormHelperText className={classes.error}>
                    {errors.name}
                  </FormHelperText>
                )}
              </FormControl>

              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="name">Last Name</InputLabel>
                <Input
                  id="lastName"
                  name="lastName"
                  autoComplete="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                />{' '}
              </FormControl>

              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input
                  id="email"
                  name="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={handleChange}
                />{' '}
                {touched.email &&
                  errors.email && (
                  <FormHelperText className={classes.error}>
                    {errors.email}
                  </FormHelperText>
                )}
                {errors.exists && (
                  <FormHelperText className={classes.error}>
                    {errors.exists}
                  </FormHelperText>
                )}
              </FormControl>

              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="gender">Gender</InputLabel>
                <Select
                  value={values.gender}
                  onChange={handleChange}
                  input={<Input id="gender" name="gender" />}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="transgender">Transgender</MenuItem>
                </Select>
                {touched.gender &&
                  errors.gender && (
                  <FormHelperText className={classes.error}>
                    {errors.gender}
                  </FormHelperText>
                )}
              </FormControl>

              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                />{' '}
                {touched.password &&
                  errors.password && (
                  <FormHelperText className={classes.error}>
                    {errors.password}
                  </FormHelperText>
                )}
              </FormControl>

              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="passwordConfirm">
                  Confirm Password
                </InputLabel>
                <Input
                  name="passwordConfirm"
                  type="password"
                  id="passwordConfirm"
                  value={values.passwordConfirm}
                  onChange={handleChange}
                />{' '}
                {touched.passwordConfirm &&
                  errors.passwordConfirm && (
                  <FormHelperText className={classes.error}>
                    {errors.passwordConfirm}
                  </FormHelperText>
                )}
              </FormControl>
              {this.state.recapchaErrorMsg && (
                <div
                  style={{
                    margin: '15px auto',
                    fontSize: '0.8em',
                    color: 'red',
                  }}
                >
                  {this.state.recapchaErrorMsg}
                </div>
              )}
              <div style={{ margin: '15px auto', color: 'red' }}>
                <Recaptcha
                  sitekey="6Lcba54UAAAAAE4RiyyuCcJzxtcFyAqBLEzYWvLr"
                  render="explicit"
                  onloadCallback={() => {
                    console.log('recapcha onload');
                  }}
                  verifyCallback={res => {
                    if (res) {
                      this.setState({
                        isVerified: true,
                        recapchaErrorMsg: '',
                      });
                    }
                  }}
                />
              </div>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={isSubmitting}
              >
                Signup
                {isSubmitting && (
                  <CircularProgress
                    style={{ marginLeft: 10, color: 'green' }}
                    size={20}
                  />
                )}
              </Button>
              <Button
                fullWidth
                type="button"
                variant="contained"
                color="secondary"
                onClick={routeToLogin}
                className={classes.backBtn}
                disabled={isSubmitting} 
              >
                Back
              </Button>
            </form>
          );
        }}
      </Formik>
    );
  }
}

const componentWithStyles = withStyles(styles)(SignupForm);

export default componentWithStyles;
