import React from 'react';
import useUiContext from '../../ui/UseContext';
import {SideBarMenu} from './SideBarMenu';

export default () => {
  const {AppBar, Toolbar, IconButton, Menu, Typography, DrawerState} = useUiContext();

  const {toggleDrawer} = DrawerState;

  return (
    <>
      <AppBar color="default" position="fixed" elevation={4}>
        <Toolbar>
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer(true)}
          >
            <Menu/>
          </IconButton>
          <Typography variant="h4" noWrap color="secondary">
            WECATOSKEYAKAN
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar/>

      <SideBarMenu />
    </>
  );
};