import React from 'react';
import useUiContext from './UseContext';
import useAppContext from '../app/UseContext';

export default ({e = '', n, v, c, d, r = false, disabled = false}) => {
  const {useTranslate} = useAppContext();
  const {t} = useTranslate();
  const {Select, MenuItem} = useUiContext();
  return (
    <Select
      name={n}
      labelId={`${n}Label`}
      id={`${n}Select`}
      value={v}
      onChange={c}
      required={r}
      disabled={disabled}
      inputProps={{required: r}}
    >
      <MenuItem key={`default-${n}`} value={e}>
        {t('none')}
      </MenuItem>
      {
        d.map((t) => (
          <MenuItem key={`${n}-${t.id}`} value={t.id}>{t.label}</MenuItem>
        ))
      }
    </Select>
  );
};
