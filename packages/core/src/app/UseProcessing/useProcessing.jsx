import {useState} from 'react';

export const useProcessing = () => {
  const [s, setS] = useState(false);

  return {
    processing: s,
    setProcessing: setS
  };
};
