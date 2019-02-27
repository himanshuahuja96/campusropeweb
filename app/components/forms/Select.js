import * as React from 'react';
import MuiSelect from '@material-ui/core/Select';

export const fieldToSelect = ({
  field,
  form: { isSubmitting },
  disabled = false,
  ...props
}) => ({
  disabled: isSubmitting || disabled,
  ...props,
  ...field,
});

const Select = props => <MuiSelect {...fieldToSelect(props)} />;

Select.displayName = 'FormikMaterialUISelect';
export default Select;
