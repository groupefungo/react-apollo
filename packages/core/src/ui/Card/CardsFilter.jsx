import React from 'react';
import useUiContext from '../UseContext';

import { FilterList } from './FilterList';

export default ({ onClick, filters, value = '0', label }) => {
  const { makeStyles } = useUiContext();

  const useStyles = makeStyles((theme) => (
    {
      filterBox: {
        background: theme.palette.background,
        padding: theme.spacing(1),
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
      },
      title: {
        marginBottom: 5,
      },
      filters: {
        marginBottom: 4,
      },
    }));

  const classes = useStyles();

  const { Grid, Paper, RadioGroup } = useUiContext();
  return (
    <Grid container alignItems="center">
      <Paper className={classes.filterBox} elevation={1}>
        <Grid container item spacing={1} className={classes.filters}>
          <RadioGroup
            row
            aria-label="filters"
            name="filters"
            value={value}
          >
            <FilterList filters={filters} onClick={onClick} selectedValue={value} />
          </RadioGroup>
        </Grid>
      </Paper>
    </Grid>
  );
};
