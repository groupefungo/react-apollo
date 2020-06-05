import React from 'react';
import useUiContext from './UseContext';

import ChipsArray from './ChipsArray';
import useAppContext from "../app/UseContext";

export default ({chipsData, chipClicked, chipDeleted}) => {
  const {useTranslate} = useAppContext();
  const {t} = useTranslate();
  const {Grid, Typography, Paper, Box} = useUiContext();

  return (
    <Grid container spacing={1}>
      <Grid container item sm={12}>
        <Typography variant="caption" color="textSecondary">{t('uploaded_files')}</Typography>
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
