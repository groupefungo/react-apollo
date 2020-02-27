import React, { useState } from 'react';
import useUiContext from '../UseContext';
import useAppContext from '../../app/UseContext';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { FooterNavigationPanel } from '../FooterNavigationPanel';

export default () => {
  const appContext = useAppContext();
  const { Fade, IconButton, Box, Typography, Grid, AppsIcon } = useUiContext();

  const { useAuth } = appContext;
  const auth = useAuth();

  const [bottomMenuVisible, setBottomMenuVisible] = useState(false);

  const handleChange = () => {
    if (bottomMenuVisible) setBottomMenuVisible(false);
    else setBottomMenuVisible(true);
  };

  const handleClickAway = () => (setBottomMenuVisible(false));

  const { makeStyles } = useUiContext();
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      paddingBottom: theme.spacing(1),
      position: 'fixed',
      backgroundColor: theme.palette.primary.main,
      bottom: 0,
      left: 0,
    },
    iconsButton: {
      color: theme.palette.primary.contrastText,
      opacity: '50%',
    },
    logo: {
      color: theme.palette.primary.contrastText,
    },
    greetings: {
      color: theme.palette.primary.contrastText,
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Box mt={10} />
      <Fade style={{ zIndex: 300 }} in={bottomMenuVisible} mountOnEnter unmountOnExit>
        <ClickAwayListener onClickAway={handleClickAway}>
          <Grid item>
            <FooterNavigationPanel onClose={handleChange} />
          </Grid>
        </ClickAwayListener>
      </Fade>
      <Grid
        container
        spacing={3}
        justify="space-between"
        alignItems="center"
        className={classes.root}
      >
        <Grid item>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => handleChange()}
            className={classes.iconsButton}
          >
            <AppsIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <Typography variant="h5" className={classes.logo}>
            Logo RCAAQ
          </Typography>
        </Grid>
        {
          auth && auth.user && (
            <Grid item>
              <Typography className={classes.greetings}>
                Bonjour
                {
                  auth.user.firstName
                }
              </Typography>
            </Grid>
          )
        }
      </Grid>
    </>
  );
};
