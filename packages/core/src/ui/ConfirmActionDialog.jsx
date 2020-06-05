import React from 'react';
import useUiContext from './UseContext';
import useAppContext from "../app/UseContext";

export default ({open, setOpen, action}) => {
  const {useTranslate} = useAppContext();
  const {t} = useTranslate();

  const {Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText, Button} = useUiContext();

  const confirmed = () => {
    const {clicked} = action;
    clicked(action.object);
    setOpen(false);
  }

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{`${action && action.name}?`}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {action && action.confirmMessage}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)} color="primary">
          {t('cancel')}
        </Button>
        <Button onClick={confirmed} color="primary" autoFocus>
          {t('yes')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
