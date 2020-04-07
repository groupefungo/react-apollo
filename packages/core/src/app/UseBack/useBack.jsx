import { useState } from 'react';

export const useBack = () => {
  const [backState, setBackState] = useState(null);

  return {
    backState,
    setBackState
  };
};
