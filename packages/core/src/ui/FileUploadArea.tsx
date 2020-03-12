import React from 'react';
import useUiContext from './UseContext';

import ChipsArray from './ChipsArray';

export default ({ chipsData, chipClicked, chipDeleted }) => {
  const { Grid, Typography, Paper, Box } = useUiContext();

  return (
    <Grid container spacing={1}>
      <Grid container item sm={12}>
        <Typography variant="caption" color="textSecondary">Fichiers ajoutés</Typography>
      </Grid>
      <Grid container item>
        <Box mb={1}>
          <Paper elevation={0}>
            <Box padding={1}>
              <ChipsArray
                chipClicked={chipClicked}
                chipsData={chipsData}
                chipDeleted={chipDeleted}
              />
            </Box>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};
