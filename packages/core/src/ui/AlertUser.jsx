import React from 'react';
import useUiContext from '../ui/UseContext';

export default () => {
  const {SnackBar, Snackbar, MuiAlert, makeStyles} = useUiContext();
  const Alert = (props) => <MuiAlert elevation={6} variant="filled" {...props} />;

  const {handleClose, snackBarOpened, alert} = SnackBar;

  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

  const classes = useStyles();
  const {msg, severity} = alert;
  return (
    <div className={classes.root}>
      <Snackbar open={snackBarOpened} autoHideDuration={6000} onClose={handleClose}>
        <Alert key={msg} onClose={handleClose} severity={severity}>
          {msg}
        </Alert>
      </Snackbar>
    </div>
  );
};
