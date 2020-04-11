import React from 'react';
import useUiContext from '../UseContext';
import useAppContext from '../../app/UseContext';

export default ({ title, routePath, customAction }) => {
  const appContext = useAppContext();
  const { Grid, Tooltip, Fab, AddIcon } = useUiContext();

  const { useRouter } = appContext;
  const router = useRouter();
  if (routePath && customAction) return null;

  const myOnClick = () => {
    if (customAction) return customAction;
    return () => router.push(routePath);
  }

  return (
    <Grid item xs={2} sm={1}>
      <Tooltip title={title} aria-label="add" placement="left">
        <Fab
          onClick={myOnClick()}
          color="secondary"
          aria-label="add"
          style={{
            zIndex: 1299,
            top: 30,
            right: 30,
            position: 'fixed',
          }}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
    </Grid>
  );
};
