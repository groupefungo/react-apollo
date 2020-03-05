import React from 'react';
import useUiContext from './UseContext';

export default ({topItems, bottomItems}) => {
  const {makeStyles, DrawerState} = useUiContext();
  const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });

  const classes = useStyles();
  const {toggleDrawer, state} = DrawerState;

  const {List, Divider, Drawer} = useUiContext();

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {topItems}
      </List>
      <Divider/>
      <List>
        {bottomItems}
      </List>
    </div>
  );

  return (
    <div>
      <Drawer open={state} onClose={toggleDrawer(false)}>
        {sideList()}
      </Drawer>
    </div>
  );
}
