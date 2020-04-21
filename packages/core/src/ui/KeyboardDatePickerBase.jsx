import React from 'react';
import useUiContext from './UseContext';

export default ({value, changed, name}) => {
  const {KeyboardDatePicker} = useUiContext();
  return (
    <KeyboardDatePicker
      name={name}
      disableToolbar
      autoOk
      variant="inline"
      format="dd/MM/yyyy"
      placeholder="10/10/2018"
      id="date-picker-inline"
      label="Date"
      value={value}
      onChange={changed}
      KeyboardButtonProps={{
        'aria-label': 'change date',
      }}
    />
  );
};
