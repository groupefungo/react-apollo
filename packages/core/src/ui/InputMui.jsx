import React from 'react';
import * as PropTypes from 'prop-types';
import useUiContext from './UseContext';

function InputMui(props) {
  const { InputAdornment, TextField } = useUiContext();

  const getAdornmentElement = (adornment) => <InputAdornment position="start">{adornment}</InputAdornment>;

  const { label, value, onChange, type, adornment, ...remainingProps } = props;

  const inputLabelProps = { shrink: true };
  if (adornment) {
    inputLabelProps.startAdornment = getAdornmentElement(adornment);
  }

  const inputProps = { type, value };

  return (
    <TextField
      variant="outlined"
      label={label}
      onChange={onChange}
      InputLabelProps={inputLabelProps}
      inputProps={inputProps}
      {...remainingProps}
    />
  );
}

InputMui.defaultProps = {
  label: '',
  adornment: '',
  type: 'text',
};

InputMui.propTypes = {
  adornment: PropTypes.oneOfType([PropTypes.instanceOf(Element), PropTypes.string]),
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default InputMui;
