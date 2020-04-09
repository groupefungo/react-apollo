import { useState } from 'react';

export const useSnackBar = () => {
  const [snackBarState, setSnackBarState] = useState({
    opened: false,
    alert: {
      msg: null,
      severity: 'success'
    },
  });

  const informSuccess = (msg) => {
    inform(msg, 'success');
  };

  const informError = (msg) => {
    inform(msg, 'error');
  };

  const inform = (msg, severity) => {
    setSnackBarState({
      alert: {
        severity,
        msg
      },
      opened: true,
    });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackBarState({
      alert: {
        msg: null,
        severity: 'success'
      },
      opened: false,
    });
  };

  const { alert, opened: snackBarOpened } = snackBarState;

  return {
    snackBarOpened,
    alert,
    inform,
    informError,
    informSuccess,
    handleClose,
  };
};
