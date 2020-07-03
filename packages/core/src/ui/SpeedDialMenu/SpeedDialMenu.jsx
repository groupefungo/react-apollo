import React, {useState} from 'react';
import useSpeedDialMenuStyles from "./useSpeedDialMenuStyles";
import useUiContext from "../UseContext";

export default ({actions}) =>   {
  const {SpeedDial, SpeedDialIcon, SpeedDialAction} = useUiContext();
  const classes = useSpeedDialMenuStyles();

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.root}>
      <div className={classes.exampleWrapper}>
        <SpeedDial
          ariaLabel="SpeedDial example"
          className={classes.speedDial}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          direction="up"
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={action.clicked}
            />
          ))}
        </SpeedDial>
      </div>
    </div>
  );
}
