import React from 'react';
import useUiContext from '../../ui/UseContext';
import useAppContext from '../UseContext';

export const SideBarMenu = () => {
  const appContext = useAppContext();

  const { useRouter } = appContext;
  const router = useRouter();
  const { ListItem, ListItemText, ListItemIcon, MailIcon, Divider, TemporaryDrawer } = useUiContext();

  const topItems = () => (
    <>
      <ListItem button key="0">
        <ListItemText primary="Home" onClick={() => router.push('/')} />
      </ListItem>
      <Divider />
      <ListItem button key="1">
        <ListItemText primary="Rc" onClick={() => router.push('/rc')} />
      </ListItem>
      <Divider />
      <ListItem button key="2">
        <ListItemIcon><MailIcon /></ListItemIcon>
        <ListItemText primary="Form" onClick={() => router.push('/form')} />
      </ListItem>
      <ListItem button key="3">
        <ListItemIcon></ListItemIcon>
        <ListItemText primary="DatePicker" onClick={() => router.push('/datepicker')} />
      </ListItem>
    </>
  );

  return (
    <TemporaryDrawer bottomItems={[]} topItems={topItems()} />
  );
};
