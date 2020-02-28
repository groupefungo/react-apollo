import React from 'react';
import useUiContext from './UseContext';

export default (props) => {
  const { Radio, GroupWorkIcon } = useUiContext();

  return (
    <Radio
      className="filterItem"
      disableRipple
      color="default"
      checkedIcon={
        (
          <GroupWorkIcon
            color="primary"
            fontSize="inherit"
            className="filterItem-checked"
          />
        )
      }
      icon={<GroupWorkIcon color="disabled" fontSize="inherit" />}
      {...props}
    />
  );
};
