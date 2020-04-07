import React from 'react';
import useUiContext from './UseContext';
import useAppContext from '../app/UseContext';

const a11yProps = (index) => (
  {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
);

export default (props) => {
  const appContext = useAppContext();
  const { AppBar, Tabs, Tab } = useUiContext();

  const { useRouter } = appContext;
  const router = useRouter();

  const { tabs } = props;

  const { makeStyles } = useUiContext();
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      marginLeft: -theme.spacing(4),
      marginRight: -theme.spacing(4),
    },
  }));

  const classes = useStyles();

  const initTab = () => {
    const found = findWithExactPath() || findWithStartsWith();
    return tabs.indexOf(found);
  };

  const findWithExactPath = () => {
    return tabs.find((t) => {
      const { path } = t.props;
      return router.pathname === path;
    });
  };

  const findWithStartsWith = () => {
    return tabs.find((t) => {
      const { path, routepath } = t.props;
      return router.pathname.startsWith(routepath || path);
    });
  };

  const tabChanged = (path) => () => router.push(path);

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" elevation={2}>
        <Tabs
          value={initTab()}
          aria-label="simple tabs example"
          textColor="inherit"
          style={{ paddingTop: 10 }}
          variant="scrollable"
          scrollButtons="auto"
          // centered
        >
          {
            tabs.map((child, index) => (
              <Tab
                key={child.key}
                {...child.props}
                {...a11yProps(parseInt(index, 10))}
                onClick={tabChanged(child.props.path)}
              />
            ))
          }
        </Tabs>
      </AppBar>
    </div>
  );
};
