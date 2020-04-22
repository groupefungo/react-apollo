import React from 'react';
import useUiContext from "../UseContext";
import useAppContext from "../../app/UseContext";

export const Dialog = ({contentText}) => {
  const {UseProcessing} = useAppContext();
  const {processing} = UseProcessing;
  const {Dialog, DialogTitle, DialogContent, DialogContentText} = useUiContext();
  return (
    <Dialog
      open={processing}
      onClose={null}
    >
      <DialogTitle>Un instant svp</DialogTitle>
      <DialogContent>
        <DialogContentText id="dialogContentLoading">
          {contentText}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};