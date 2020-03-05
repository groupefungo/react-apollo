import { useState } from 'react';

export const useDrawer = () => {
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  };

  return {
    state,
    toggleDrawer,
  };
};
