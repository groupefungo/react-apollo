import React from 'react';

import useUiContext from './UseContext';

export default ({chipsData, size, chipDeleted, chipClicked}) => {
  const {Chip, GetAppIcon, Grid} = useUiContext();

  return (
    <Grid container spacing={1}>
      {chipsData.map((data) => (
        <Chip
          icon={data.id && <GetAppIcon/>}
          onClick={chipClicked(data)}
          clickable={data.id && true}
          key={data.key || data.id}
          label={data.label || data.filename}
          onDelete={chipDeleted && chipDeleted(data)}
        />
      ))}
    </Grid>
  );
}
