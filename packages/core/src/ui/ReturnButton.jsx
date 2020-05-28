import React from 'react';
import useUiContext from 'UseContext';
import useAppContext from '../app/UseContext';

export default ({back}) => {
  const {useRouter, UseBack, useTranslate} = useAppContext();
  const {t} = useTranslate();
  const router = useRouter();
  const {Button} = useUiContext();

  const myBack = () => {
    if (back) return back;

    return () => {
      const {push} = router;
      const {backState} = UseBack;
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
      {t('back')}
    </Button>
  );
};
