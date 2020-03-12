import React from 'react';
import useUiContext from './UseContext';

export default ({ className, ...textFieldAttrs }) => {
  const { TextField } = useUiContext();
  return (
    <TextField
      className={className}
      fullWidth
      label="Titre"
      type="title"
      name="title"
      {...textFieldAttrs}
    />
  );
};
