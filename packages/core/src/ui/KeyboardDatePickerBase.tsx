import React from 'react';
import useUiContext from './UseContext';

export default ({ value, changed, name }) => {
  const { MuiPickersUtilsProvider, KeyboardDatePicker, DateFnsUtils } = useUiContext();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        name={name}
        disableToolbar
        autoOk
        variant="inline"
        format="dd / MM / yyyy"
        id="date-picker-inline"
        label="Date"
        value={value}
        onChange={changed}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
  );
};
