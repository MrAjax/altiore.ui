import React from 'react';

import MaterialTextField from '@material-ui/core/TextField';

export const TextField = (props: any) => {
  const {
    input,
    label,
    meta: { touched, error },
    ...custom
  } = props;
  return React.createElement(MaterialTextField, {
    error: touched && !!error,
    fullWidth: true,
    helperText: touched && error,
    label: label || input.name,
    margin: 'normal',
    placeholder: custom.placeholder || label,
    ...input,
    value: typeof input.value === 'undefined' ? '' : input.value,
    ...custom,
  });
};
