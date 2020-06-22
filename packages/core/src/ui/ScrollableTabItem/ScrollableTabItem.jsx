import React from 'react';
import * as PropTypes from 'prop-types';
import useUiContext from '../UseContext';

function ScrollableTabItem ({ clickHandler, index, label, tabIcon }) {
  const { Tab } = useUiContext();

  function tabProps(tabIndex) {
    return {
      id: `scrollable-force-tab-${tabIndex}`,
      'aria-controls': `scrollable-force-tabpanel-${tabIndex}`,
    };
  }

  return (
    <Tab
      label={label}
      icon={tabIcon}
      onClick={clickHandler}
      {...tabProps(index)}
    />
  );
}

ScrollableTabItem.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  tabIcon: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default ScrollableTabItem;