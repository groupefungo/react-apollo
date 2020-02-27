import React from 'react';
import useUiContext from '../UseContext';

import './styles.scss';
import StyledRadio from './StyledRadio';

export default (props) => {
  const { filters, onClick, selectedValue } = props;

  const { FormControlLabel } = useUiContext();

  return (
    filters.map((filter) => {
      const { id, title, name } = filter;
      if (!title && !name) return null;

      return (
        <FormControlLabel
          key={id}
          value={id}
          onClick={() => onClick(id)}
          control={<StyledRadio checked={(id === selectedValue)} />}
          label={title || name}
          labelPlacement="bottom"
        />
      );
    })
  );
};
