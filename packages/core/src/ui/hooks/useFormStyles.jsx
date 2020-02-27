import useUiContext from '../UseContext';

export default () => {
  const { makeStyles } = useUiContext();

  return makeStyles((theme) => ({
    formControl: {
      // margin: theme.spacing(2),
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    formControlMedium: {
      padding: theme.spacing(1),
    },
  }));
};
