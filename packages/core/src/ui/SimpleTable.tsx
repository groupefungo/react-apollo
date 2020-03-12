import React from 'react';
import useUiContext from './UseContext';

export default ({ rows }) => {
  const { makeStyles } = useUiContext();
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const classes = useStyles();
  const {
    TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper,
  } = useUiContext();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>intervention</TableCell>
            <TableCell align="right">no de dossier</TableCell>
            <TableCell align="right">initiée par</TableCell>
            <TableCell align="right">date</TableCell>
            <TableCell align="right">statut</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.interventionType}
              </TableCell>
              <TableCell align="right">{row.no}</TableCell>
              <TableCell align="right">{row.requesterId}</TableCell>
              <TableCell align="right">{row.interventionDate}</TableCell>
              <TableCell align="right">{row.statut}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
