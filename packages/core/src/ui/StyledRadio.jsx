import React from 'react';
import useUiContext from './UseContext';
import './cardStyles.scss'

export default (props) => {
  const { icon, checkedIcon } = props;
  const { Radio } = useUiContext();

  return (
    <Radio
      className="filterItem"
      disableRipple
      color="default"
      checkedIcon={checkedIcon}
      icon={icon}
      {...props}
    />
  );
};
