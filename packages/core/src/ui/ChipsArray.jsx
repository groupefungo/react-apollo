import React from 'react';

import useUiContext from './UseContext';

export default ({ chipsData, size, chipDeleted, chipClicked }) => {
  const { Chip, GetAppIcon, Grid } = useUiContext();

  return (
    <Grid container spacing={1}>
      {chipsData.map((data) => (
        <Grid item key={data.key || data.id}>
          <Chip
            icon={data.id && <GetAppIcon />}
            onClick={chipClicked(data)}
            clickable={data.id && true}
            size={size}
            key={data.key || data.id}
            label={data.label || data.filename}
            onDelete={chipDeleted && chipDeleted(data)}
          />
        </Grid>
      ))}
    </Grid>
  );
}
