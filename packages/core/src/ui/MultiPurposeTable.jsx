import React, {memo} from 'react';
import * as PropTypes from 'prop-types';
import {times} from 'lodash';
import useUiContext from './UseContext';
import Skeleton from '@material-ui/lab/Skeleton';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import MultiPurposeTablePagination from './MultiPurposeTablePagination';

function MultiPurposeTable(props) {
  const {objects, headers, columns, data, loading, connectionState, handleRowClick} = props;
  const {
    Container, Table, TableBody, TableContainer, TableHead, TableRow, TableCell,
  } = useUiContext();

  const {state, setState} = connectionState;
  const {first, last, sortKey, reverse} = state;
  if (loading) {
    return (
      <Container>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {headers.map((header) => (
                  <TableCell key={`${header.sortKey}_cell`}>
                    {header.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {times(first, (index) => (
                <TableRow key={index}>
                  {times(columns.length, (index2) => <TableCell key={index2}><Skeleton/></TableCell>)}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    );
  }

  const {[objects]: {edges, pageInfo}} = data;

  const list = edges.map((e) => e.node);

  const handleSortChange = (newSortKey) => (e) => {
    e.preventDefault();

    const name = first ? 'first' : 'last';
    const perPage = first || last;

    const isNewKey = newSortKey !== sortKey;

    if (isNewKey) {
      setState({
        ...state,
        [name]: perPage,
        reverse: false,
        sortKey: newSortKey,
        before: null,
        after: null,
      });
    } else if (reverse) {
      setState({
        ...state,
        reverse: !reverse,
        sortKey: newSortKey,
        [name]: perPage,
      });
    } else if (reverse == null) {
      setState({
        ...state,
        reverse: !!reverse,
        sortKey: newSortKey,
        [name]: perPage,
      });
    } else {
      setState({
        ...state,
        reverse: !reverse,
        sortKey: newSortKey,
        [name]: perPage,
      });
    }
  };

  const TableCellComponent = (object, column) => {
    if (typeof column !== 'string') {
      const {name, component} = column;
      return <TableCell key={`${column}_${object.id}`}>{component(object[name])}</TableCell>;
    }
    return <TableCell key={`${column}_${object.id}`}>{object[column]}</TableCell>;
  };
  return (
    <Container>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <TableCell key={`${header.sortKey}_cell`}>
                  <TableSortLabel
                    key={`${header.sortKey}_cell_sort_label`}
                    active={sortKey === header.sortKey}
                    direction={reverse ? 'desc' : 'asc'}
                    onClick={handleSortChange(header.sortKey)}
                  >
                    {header.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((object) => (
              <TableRow key={object.id} onClick={handleRowClick(object.gid)}>
                {columns.map((column) => TableCellComponent(object, column))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <MultiPurposeTablePagination
        connectionState={connectionState}
        pageInfo={pageInfo}
        count={list.length}
      />
    </Container>
  );
}

MultiPurposeTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        name: PropTypes.string,
        component: PropTypes.func,
      })]),
  ).isRequired,
  data: PropTypes.object.isRequired,
  headers: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  objects: PropTypes.string.isRequired,
  connectionState: PropTypes.object.isRequired,
  handleRowClick: PropTypes.func.isRequired,
};

export default memo(MultiPurposeTable);
