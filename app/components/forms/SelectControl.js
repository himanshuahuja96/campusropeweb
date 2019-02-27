import React from 'react';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
} from '@material-ui/core';
import { getIn } from 'formik';

export const fieldToSelect = ({ field, form, disabled = false, ...props }) => {
  const { name } = field;
  const { touched, errors, isSubmitting } = form;

  const fieldError = getIn(errors, name);
  const showError = getIn(touched, name) && !!fieldError;
  return {
    error: showError,
    helperText: showError ? fieldError : props.helperText,
    disabled: isSubmitting || disabled,
    ...props,
    ...field,
  };
};

const SelectControl = props => {
  const { options, required, label, ...fields } = fieldToSelect(props);
  return (
    <FormControl margin="normal" fullWidth required={required}>
      <InputLabel htmlFor={fields.name}>{label}</InputLabel>
      <Select {...fields}>{options}</Select>
      {fields.touched &&
        fields.error && (
          <FormHelperText style={{ color: 'red' }}>
            {fields.error}
          </FormHelperText>
        )}
    </FormControl>
  );
};

export default SelectControl;
