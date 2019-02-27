import React from 'react';
import MuiTextField from '@material-ui/core/TextField';
import { getIn } from 'formik';

export const fieldToTextField = ({
  field,
  form,
  variant,
  disabled = false,
  ...props
}) => {
  const { name } = field;
  const { touched, errors, isSubmitting } = form;

  const fieldError = getIn(errors, name);
  const showError = getIn(touched, name) && !!fieldError;
  return {
    ...props,
    ...field,
    variant,
    error: showError,
    helperText: showError ? fieldError : props.helperText,
    disabled: isSubmitting || disabled,
  };
};

const TextField = ({ children, ...props }) => (
  <MuiTextField {...fieldToTextField(props)} children={children} />
);

TextField.displayName = 'FormikMaterialUITextField';

export default TextField;
