import React from 'react';
import useUiContext from './UseContext';
import useAppContext from '../app/Context';

export default ({ title, routePath, customAction }) => {
  const appContext = useAppContext();
  const { Grid, Tooltip, Fab, AddIcon } = useUiContext();

  const { useRouter } = appContext;
  const router = useRouter();
  if (routePath && customAction) return null;

  return (
    <Grid item xs={2} sm={1}>
      <Tooltip title={title} aria-label="add" placement="left">
        <Fab
          color="secondary"
          aria-label="add"
          style={{
            zIndex: 1299,
            top: 30,
            right: 30,
            position: 'fixed',
          }}
        >
          {(customAction) && (<AddIcon onClick={customAction} />)}
          {(routePath) && (<AddIcon onClick={() => router.push(routePath)} />)}
        </Fab>
      </Tooltip>
    </Grid>
  );
};
