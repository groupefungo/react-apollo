import React from 'react';
import useUiContext from "../UseContext";
import useAppContext from "../../app/UseContext";

export const Dialog = () => {
  const {UseProcessing, useTranslate} = useAppContext();
  const {processing} = UseProcessing;
  const {t} = useTranslate();
  const {Dialog, DialogTitle, DialogContent, DialogContentText} = useUiContext();
  return (
    <Dialog open={processing} onClose={null}>
      <DialogTitle>Un instant svp</DialogTitle>
      <DialogContent>
        <DialogContentText id="dialogContentLoading">
          {t('app.processing')}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};