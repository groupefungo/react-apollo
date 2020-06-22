import React from 'react';
import * as PropTypes from 'prop-types';
import useUiContext from '../UseContext';

function ScrollableTabItem(props) {
  const {Tab} = useUiContext();

  function tabProps(tabIndex) {
    return {
      id: `scrollable-force-tab-${tabIndex}`,
      'aria-controls': `scrollable-force-tabpanel-${tabIndex}`,
    };
  }

  const {index} = props;
  return (
    <Tab
      {...props}
      {...tabProps(index)}
    />
  );
}



export default ScrollableTabItem;