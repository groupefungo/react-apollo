import React from 'react';
import useUiContext from './UseContext';
import {useAppContext} from "../app/UseContext/useAppContext";

export default ({rows, translationNamespace, columns, rowObjectKey, rowClicked}) => {
  const {useTranslate} = useAppContext();
  const {t} = useTranslate();
  const {makeStyles} = useUiContext();
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
      return <TableCell key={`col-${column}_${object[rowObjectKey]}`}>{component(object[name])}</TableCell>;
    }
    return <TableCell key={`col-${column}_${object[rowObjectKey]}`}>{object[column]}</TableCell>;
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow key="headers">
            {columns.map((cname) => (
              <TableCell key={`header-${cname}`}>
                {t(`${translationNamespace}.${cname}`)}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((object) => (
            <TableRow key={`row-${object[rowObjectKey]}`} onClick={rowClicked(object)}>
              {columns.map((column) => TableCellComponent(object, column))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
