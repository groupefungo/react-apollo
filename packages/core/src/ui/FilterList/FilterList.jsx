import React from 'react';
import useUiContext from '../UseContext';
import StyledRadio from '../StyledRadio';

export default (props) => {
  const {filters, onClick, selectedValue} = props;
  const {FormControlLabel} = useUiContext();

  return (
    filters.map((filter) => {
      const {id, title, name, logo} = filter;
      if (!title && !name) return null;

      const {url} = logo || {};

      return (
        <FormControlLabel
          key={id}
          value={id}
          onClick={() => onClick(id)}
          control={<StyledRadio checked={(id === selectedValue)} logo={url}/>}
          label={title || name}
          labelPlacement="bottom"
        />
      );
    })
  );
};
