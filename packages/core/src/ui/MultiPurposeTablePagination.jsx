import React, {memo} from 'react';
import * as PropTypes from 'prop-types';
import useUiContext from './UseContext';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import TableFooter from '@material-ui/core/TableFooter';

const perPageOptions = [5, 10, 15, 25, 50, 100];

function MultiPurposeTablePagination(props) {
  const {IconButton, SelectMui} = useUiContext();
  const {connectionState, pageInfo} = props;
  const {state: connection, setState} = connectionState;
  const {first, last} = connection;
  const {startCursor, endCursor, hasNextPage, hasPreviousPage} = pageInfo;

  const handleRowChange = ({target}) => {
    const {value} = target;

    if (!hasPreviousPage) {
      setState({
        ...connection,
        before: null,
        after: null,
        last: null,
        first: value,
      });
    } else {
      setState({
        ...connection,
        before: startCursor,
        after: null,
        last: value,
        first: null,
      });
    }
  };
  const handleBack = () => {
    const perPage = first || last;

    setState({
      ...connection,
      before: startCursor,
      after: null,
      last: perPage,
      first: null,
    });
  };

  const handleNext = () => {
    const perPage = first || last;

    setState({
      ...connection,
      before: null,
      after: endCursor,
      first: perPage,
      last: null,
    });
  };

  return (
    <TableFooter component="div">
      <div style={{display: 'flex'}} id="multipurpose_table_pagination_wrapper">
        <SelectMui
          name={first ? 'first' : 'last'}
          label="Rows Per Page"
          onChange={handleRowChange}
          options={perPageOptions}
          value={first || last}
        />
        <div style={{display: 'flex'}}>
          <IconButton id="multipurpose_table_pagination_previous_page_button" disabled={!hasPreviousPage} onClick={handleBack}><ArrowBackIcon/></IconButton>
          <IconButton id="multipurpose_table_pagination_next_page_button" disabled={!hasNextPage} onClick={handleNext}><ArrowForwardIcon/></IconButton>
        </div>
      </div>
    </TableFooter>
  );
}

MultiPurposeTablePagination.propTypes = {
  connectionState: PropTypes.object.isRequired,
  pageInfo: PropTypes.object.isRequired,
};
export default memo(MultiPurposeTablePagination);
