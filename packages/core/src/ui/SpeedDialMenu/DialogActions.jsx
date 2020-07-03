import React, {useState} from 'react';
import Icon from '@material-ui/core/Button';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import useUiContext from "../UseContext";
import ConfirmActionDialog from "../ConfirmActionDialog";

export default ({actions, object}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openWarning, setOpenWarning] = useState(false);
  const [warningAction, setWarningAction] = useState(null);

  const open = Boolean(anchorEl);

  const opened = event => {
    setAnchorEl(event.currentTarget);
  };

  const closed = () => {
    setAnchorEl(null);
  };

  const itemClicked = (action) => () => {
    closed();
    const {clicked, confirmMessage} = action;
    if (confirmMessage) {
      action.object = object;
      setWarningAction(action);
      setOpenWarning(true);
    } else {
      clicked(object);
    }
  };

  const {Menu, MenuItem, ListItemIcon, Typography, Fade} = useUiContext();

  return (
    <div>
      <Icon
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={opened}
        id={`dialogActions-${object.id}`}
      >
        <MoreVertIcon/>
      </Icon>
      <ConfirmActionDialog
        open={openWarning}
        setOpen={setOpenWarning}
        action={warningAction}
      />
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={closed}
        TransitionComponent={Fade}
      >
        {actions.map(option => (
          <MenuItem
            key={`dialogAction-${option.name}`}
            onClick={itemClicked(option)}
            id={`dialogAction-${option.name}-${object.id}`}
          >
            <ListItemIcon>{option.icon}</ListItemIcon>
            <Typography variant="inherit">{option.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}