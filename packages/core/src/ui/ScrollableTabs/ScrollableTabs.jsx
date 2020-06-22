import React, { useState } from 'react';
import useUiContext from '../UseContext';

export default ({children}) => {
  const { AppBar, makeStyles, Tabs } = useUiContext();
  const [value, setValue] = useState(0);

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      '& .MuiTab-root': {
        '& svg, img': {
          opacity: 0.4,
        },
        '&.Mui-selected': {
          '& svg, img': {
            opacity: 1,
          },
        },
      },
    },
  }));
  const tabsStyles = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log('newValue', newValue);
  };

  return (
    <div className={`${tabsStyles.root} scrollable-tabs-root`}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs"
        >
          {children}
        </Tabs>
      </AppBar>
    </div>
  );
};