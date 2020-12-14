import React, { useEffect, useRef, useState } from 'react';
import * as PropTypes from 'prop-types';

import useUiContext from './UseContext';

function SelectMui(props) {
  const { FormControl, Select, InputLabel, MenuItem } = useUiContext();

  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);

  const { label, options, error, hasDefaultOption, defaultOptionLabel, fullWidth, color, name, native, ...remainingProps } = props;

  useEffect(() => {
    setLabelWidth(inputLabel.current.clientWidth);
  }, []);

  const labelId = `label_${name}`;
  const elementId = `select_${name}`;
  return (
    <FormControl color={color} variant="outlined" error={error} fullWidth={fullWidth}>
      <InputLabel ref={inputLabel} id={labelId}>
        {label}
      </InputLabel>
      <Select
        native={native}
        labelId={labelId}
        id={elementId}
        labelWidth={labelWidth}
        name={name}
        {...remainingProps}
      >
        {hasDefaultOption && !native ? <MenuItem value="-1"><em>{defaultOptionLabel}</em></MenuItem> : null}
        {hasDefaultOption && native ? <option value="-1">{defaultOptionLabel}</option> : null}
        {options.map((option) => {
          let optionValue;
          let optionLabel;

          if (typeof (option) === 'object') {
            optionValue = option.value;
            optionLabel = option.label;
          } else {
            optionValue = option;
            optionLabel = option;
          }
          if (native) {
            return (
              <option id={`menu_item_${optionValue}`} key={optionValue} value={optionValue}>{optionLabel}</option>
            )
          }
          return (
            <MenuItem id={`menu_item_${optionValue}`} key={optionValue} value={optionValue}>{optionLabel}</MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

SelectMui.defaultProps = {
  error: false,
  hasDefaultOption: false,
  defaultOptionLabel: '',
  fullWidth: true,
  color: 'primary',
  native: false
};

SelectMui.propTypes = {
  color: PropTypes.string,
  fullWidth: PropTypes.bool,
  hasDefaultOption: PropTypes.bool,
  defaultOptionLabel: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  error: PropTypes.bool,
  native: PropTypes.bool,
};

export default SelectMui;
