import { useState } from 'react';

export const useDrawer = () => {
  const [state, setState] = useState(true);

  const toggleDrawer = (open) => (event) => {
    console.log('using drawer toggle', open, event);
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
