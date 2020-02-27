import React from 'react';
import useUiContext from './UseContext';

export default ({ className, ...textFieldAttrs }) => {
  const { TextField } = useUiContext();
  return (
    <TextField
      className={className}
      fullWidth
      label="Description"
      type="description"
      name="description"
      variant="outlined"
      multiline
      {...textFieldAttrs}
    />
  );
};
