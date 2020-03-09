import React from 'react';
import useUiContext from './UseContext';

export default (props) => {
  const { logo } = props;
  const { Radio } = useUiContext();

  return (
    <Radio
      className="filterItem"
      disableRipple
      color="default"
      checkedIcon={
        (
          <img src={logo} height={50} width={50} />
        )
      }
      icon={<img src={logo} height={30} width={30} style={{ opacity: '50%' }} />}
      {...props}
    />
  );
};
