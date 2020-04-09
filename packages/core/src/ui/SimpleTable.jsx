import React from 'react';
import useUiContext from './UseContext';

export default ({ headers, rows, columns, handleRowClick }) => {
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

  const TableCellComponent = (object, column) => {
    if (typeof column !== 'string') {
      const {name, component} = column;
      return <TableCell key={`${column}_${object.id}`}>{component(object[name])}</TableCell>;
    }
    return <TableCell key={`${column}_${object.id}`}>{object[column]}</TableCell>;
  };
  console.log("test nd");
  console.log(rows);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell>
                {header.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((object) => (
            <TableRow key={object.id} onClick={handleRowClick(object.id)}>
              {columns.map((column) => TableCellComponent(object, column))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
