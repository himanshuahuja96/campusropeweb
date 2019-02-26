import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import _isEmpty from 'lodash/isEmpty';
import pick from 'lodash/pick';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import IdealImage from 'react-ideal-image';
import Upload from 'components/Upload/Loadable';
import TextField from '../../components/forms/TextField';
import SelectControl from '../../components/forms/SelectControl';

const NgoForm = ({
  classes,
  onSubmit,
  onCancel,
  states,
  ngo_types,
  initialValues,
}) => (
  <Formik
    initialValues={
      initialValues
        ? pick(initialValues, [
            'name',
            'ngoType',
            'ngoSiteLink',
            'contactEmail',
            'documentLink',
            'operatingState',
            'noteToUser',
          ])
        : {
            name: '',
            ngoType: '',
            ngoSiteLink: '',
            contactEmail: '',
            documentLink: '',
            operatingState: '',
            noteToUser: '',
          }
    }
    validationSchema={Yup.object().shape({
      name: Yup.string().required('Please provide name of NGO'),
      ngoType: Yup.string().required('please provide NGO type'),
      ngoSiteLink: Yup.string(),
      contactEmail: Yup.string()
        .email('please provide a valid email')
        .required('Please provide email'),
      documentLink: Yup.string().required('please upload  document'),
      operatingState: Yup.string().required(
        'Please provide state of operation',
      ),
      noteToUser: Yup.string(),
    })}
    onSubmit={(values, actions) => onSubmit(values, actions)}
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
          <Field component={TextField} name="name" label="Name" fullWidth />

          <Field
            component={SelectControl}
            required
            name="ngoType"
            label="NGO type"
            options={ngo_types.map(ngo_type => (
              <MenuItem key={ngo_type} value={ngo_type}>
                {ngo_type}
              </MenuItem>
            ))}
          />
          <Field
            component={TextField}
            name="ngoSiteLink"
            label="Website Link"
            fullWidth
          />

          <Field
            component={TextField}
            name="contactEmail"
            label="Contact Email"
            fullWidth
          />

          <Upload
            className={classes.uploadBtn}
            text="Upload cancelled Check pic"
            onUploaded={res => setFieldValue('documentLink', res[0].secure_url)}
          />
          <Typography variant="caption">
            Upload a cancelled check of your NGO named to campusope.com with NIL
            amount, dated for today to get your NGO verified
          </Typography>

          {errors.documentLink && (
            <FormHelperText className={classes.error}>
              {errors.documentLink}
            </FormHelperText>
          )}

          {!_isEmpty(values.documentLink) && (
            <IdealImage
              placeholder={{ color: 'grey' }}
              srcSet={[{ src: values.documentLink, width: 100, height: 100 }]}
              alt="cancelled check pic"
              width={100}
              height={100}
            />
          )}

          <Field
            component={SelectControl}
            required
            name="operatingState"
            label="Operating State"
            options={states.map(state => (
              <MenuItem key={state} value={state}>
                {state}
              </MenuItem>
            ))}
          />

          {initialValues &&
            initialValues.status === 'REJECTED' &&
            initialValues.adminComments && (
              <React.Fragment>
                <Typography variant="label">Reason for Rejection:</Typography>
                <Typography variant="label">
                  {initialValues.adminComments}
                </Typography>
              </React.Fragment>
            )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={isSubmitting}
          >
            {' '}
            submit
          </Button>

          <Button
            variant="contained"
            color="secondary"
            onClick={() => onCancel()}
            className={classes.cancel}
            disabled={isSubmitting}
          >
            {' '}
            cancel
          </Button>
        </form>
      );
    }}
  </Formik>
);

export default NgoForm;
