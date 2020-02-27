import React, { useState } from 'react';
import useUiContext from './UseContext';
import useAppContext from '../app/UseContext';

export const FooterNavigationPanel = ({ onClose }) => {
  const appContext = useAppContext();
  const { useRouter } = appContext;
  const router = useRouter();
  const {
    makeStyles, Paper, Grid, IconButton, PeopleAltIcon, BusinessIcon, PostAddIcon, Tooltip, Zoom,
  } = useUiContext();

  const [isOpen, setIsOpen] = useState(true);

  const useStyles = makeStyles((theme) => ({
    root: {
      // flexGrow: 1,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      paddingTop: theme.spacing(5),
      position: 'fixed',
      width: 300,
      height: 150,
      bottom: 40,
      left: 40,
      zIndex: 300,
      borderRadius: 10,
    },
    icons: {
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

  const handleClick = (url) => () => {
    onClose();
    router.push(url);
  };

  return (
    <Paper elevation={5} className={classes.root}>
      <Grid container spacing={2} justify="space-around" alignItems="center">

        <Grid item>
          <Zoom in={isOpen} style={{ transitionDelay: isOpen ? '200ms' : '0ms' }}>
            <Tooltip title="Centres" aria-label="add" placement="bottom">
              <IconButton
                color="primary"
                aria-label="open navigation panel"
                edge="start"
                onClick={handleClick('/centers')}
              >
                <BusinessIcon />
              </IconButton>
            </Tooltip>
          </Zoom>
        </Grid>

        <Grid item>

          <Zoom in={isOpen} style={{ transitionDelay: isOpen ? '400ms' : '0ms' }}>
            <Tooltip title="Catégories de publications" aria-label="add" placement="bottom">
              <IconButton
                color="primary"
                aria-label="open navigation panel"
                edge="start"
                onClick={handleClick('/categories')}
              >
                <PostAddIcon />
              </IconButton>
            </Tooltip>
          </Zoom>
        </Grid>

        <Grid item>
          <Zoom in={isOpen} style={{ transitionDelay: isOpen ? '600ms' : '0ms' }}>
            <Tooltip title="Usagers" aria-label="add" placement="bottom">
              <IconButton
                color="primary"
                aria-label="open navigation panel"
                edge="start"
                onClick={handleClick('/users')}
              >
                <PeopleAltIcon />
              </IconButton>
            </Tooltip>
          </Zoom>
        </Grid>
      </Grid>
    </Paper>
  );
};
