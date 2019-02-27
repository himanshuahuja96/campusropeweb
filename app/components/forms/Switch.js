import React from 'react';
import MuiSwitch from '@material-ui/core/Switch';

export const fieldToSwitch = ({
  field,
  form: { isSubmitting },
  disabled = false,
  ...props
}) => ({
  disabled: isSubmitting || disabled,
  ...props,
  ...field,
  value: field.name,
  checked: field.value,
});

const Switch = props => <MuiSwitch {...fieldToSwitch(props)} />;

Switch.displayName = 'FormikMaterialUISwitch';

export default Switch;
