import React from 'react';
import MuiCheckbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { fieldToCheckbox } from './Checkbox';

export const CheckboxWithLabel = ({ Label, ...props }) => (
  <FormControlLabel
    control={<MuiCheckbox {...fieldToCheckbox(props)} />}
    {...Label}
  />
);

CheckboxWithLabel.displayName = 'FormikMaterialUICheckboxWithLabel';

export default CheckboxWithLabel;
