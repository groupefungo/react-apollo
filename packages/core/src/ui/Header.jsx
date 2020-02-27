import React from 'react';
import useUiContext from './UseContext';

export default ({ title, subtitle = '' }) => {
  const { Typography, Box } = useUiContext();
  return (
    <Box my={3}>
      <Typography color="secondary" variant="h4">
        {title}
      </Typography>
      <Typography color="textSecondary" variant="h6">
        {subtitle}
      </Typography>
    </Box>
  );
};
