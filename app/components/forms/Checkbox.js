import React from 'react';
import MuiCheckbox from '@material-ui/core/Checkbox';

export const fieldToCheckbox = ({
  field,
  form: { isSubmitting },
  disabled = false,
  ...props
}) => ({
  disabled: isSubmitting || disabled,
  ...props,
  ...field,
  // TODO handle indeterminate
  checked: field.value ? 'checked' : '',
  value: field.value ? 'checked' : '',
});

const Checkbox = props => <MuiCheckbox {...fieldToCheckbox(props)} />;

Checkbox.displayName = 'FormikMaterialUICheckbox';
export default Checkbox;
