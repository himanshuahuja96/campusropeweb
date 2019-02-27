import React from 'react';
import MuiRadioGroup from '@material-ui/core/RadioGroup';

export const fieldToRadioGroup = ({
  field,
  // Exclude Form
  form,
  ...props
}) => ({
  ...props,
  ...field,
});

const RadioGroup = props => <MuiRadioGroup {...fieldToRadioGroup(props)} />;

RadioGroup.displayName = 'FormikMaterialUIRadioGroup';

export default RadioGroup;
