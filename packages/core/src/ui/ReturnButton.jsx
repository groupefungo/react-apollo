import React from 'react';
import useUiContext from '@groupefungo/react-apollo.core/ui/UseContext';
import useAppContext from '@groupefungo/react-apollo.core/app/UseContext';

export default ({ back }) => {
  const { useRouter, UseBack } = useAppContext();
  const router = useRouter();
  const { Button } = useUiContext();

  const myBack = () => {
    if (back) return back;

    return () => {
      const { push } = router;
      const { backState } = UseBack;
      const bs = backState();
      console.log('return button state', bs);
      push(bs);
    };
  };

  return (
    <Button
      type="button"
      variant="contained"
      color="secondary"
      onClick={myBack()}
    >
      Retour
    </Button>
  );
};
