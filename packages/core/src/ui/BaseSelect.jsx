import React from 'react';
import useUiContext from './UseContext';

export const BaseSelect = ({ e = '', n, v, c, d, r = false, disabled = false }) => {
  const { Select, MenuItem } = useUiContext();
  return (
    <Select
      name={n}
      labelId={`${n}Label`}
      id={`${n}Select`}
      value={v}
      onChange={c}
      required={r}
      disabled={disabled}
    >
      <MenuItem key={`default-${n}`} value={e}>
        <em>Aucun</em>
      </MenuItem>
      {
        d.map((t) => (
          <MenuItem key={`${n}-${t.id}`} value={t.id}>{t.label}</MenuItem>
        ))
      }
    </Select>
  );
};
