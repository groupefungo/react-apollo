import { useState } from 'react';

export const useBack = () => {
  const [bs, setBS] = useState(null);

  const setBackState = (s) => {
    //console.log('setting backstate', s);
    setBS(s);
  };

  const backState = () => {
    const cbs = bs;
    setBS(null);
    return cbs;
  };

  return {
    backState,
    setBackState
  };
};
