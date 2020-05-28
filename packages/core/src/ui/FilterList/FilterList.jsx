import React from 'react';
import useUiContext from '../UseContext';
import StyledRadio from '../StyledRadio';

export default (props) => {
  const {filters, onClick, selectedValue, label} = props;
  const {FormControlLabel, GroupWorkIcon} = useUiContext();

  return (
    filters.map((filter) => {
      const {id, title, name, logo} = filter;
      if (!label && !title && !name) return null;

      let checkedIcon = <GroupWorkIcon
        color="primary"
        fontSize="inherit"
      />;
      let icon = <GroupWorkIcon fontSize="inherit" color="disabled"/>;

      const {url} = logo || {};
      if (url) {
        checkedIcon = <img src={url} height={50} width={50} />;
        icon = <img src={url} height={50} width={50} style={{ opacity: '50%' }} />;
      }

      return (
        <FormControlLabel
          key={id}
          value={id}
          onClick={() => onClick(id)}
          control={<StyledRadio checked={(id === selectedValue)} checkedIcon={checkedIcon} icon={icon}/>}
          label={(label && label(filter)) || title || name}
          labelPlacement="bottom"
        />
      );
    })
  );
};
