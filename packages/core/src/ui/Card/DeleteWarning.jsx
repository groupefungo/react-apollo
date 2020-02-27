import React from 'react';
import useUiContext from '../UseContext';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default (props) => {
  const { open, title, handleCancel, handleConfirm } = props;
  const { Dialog, Button } = useUiContext();

  return (
    <Dialog
      open={open}
      onClose={handleCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{`Effacer l'article ${title}?`}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Cliquez sur le bouton supprimer pour confirmer votre décision.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          Annuler
        </Button>
        <Button onClick={handleConfirm} color="primary" autoFocus>
          Supprimer
        </Button>
      </DialogActions>
    </Dialog>
  );
};
