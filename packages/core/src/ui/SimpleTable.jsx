import React from 'react';
import useUiContext from './UseContext';
import {useAppContext} from "../app/UseContext/useAppContext";
import DialogActions from "./SpeedDialMenu/DialogActions";

function SimpleTable({rows, translationNamespace, columns, rowObjectKey, rowClicked, actions, translateColumns}) {
  const {useTranslate} = useAppContext();
  const {t} = useTranslate();
  const {
    TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, makeStyles,
  } = useUiContext();

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  const classes = useStyles();

  const columnName = (c) => {
    if (typeof c === "string") {
      return c;
    }

    const {name} = c;
    return name;
  };

  const columnNameValue = (c, o) => {
    if (typeof x === "string") {
      return [c, o[c]];
    }

    const name = columnName(c);
    const {value} = c;
    let v = value;
    if (v && typeof v === "function") {
      v = v(o);
    } else {
      if (!v) v = o[name];
    }
    return [name, v];
  };

  const TableCellComponent = (object, column) => {
    const [n, v] = columnNameValue(column, object);
    return <TableCell key={`col-${n}`} onClick={() => ((rowClicked && rowClicked(object))||null)}>{object[v]}</TableCell>;
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow key="headers">
            {columns.map((col) => {
              const cname = columnName(col);

              if (translateColumns) {
                return (
                  <TableCell key={`header-${cname}`}>{t(`${translationNamespace}.${cname}`)}</TableCell>
                );
              }
              return <TableCell key={`header-${cname}`}>{cname}</TableCell>
            })}
            {actions && (
              <TableCell key={`header-actions`}>{t('actions')}</TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((object) => (
            <TableRow key={`row-${object[rowObjectKey]}`}>
              {columns.map((column) => TableCellComponent(object, column))}
              {actions && (
                <TableCell key={`col-actions-${object.id}`}><DialogActions object={object} actions={actions}/></TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

SimpleTable.defaultProps = {
  translateColumns: true
}

export default SimpleTable;