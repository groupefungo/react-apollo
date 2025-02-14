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

  const { tabs, smaller } = props;

  const { makeStyles } = useUiContext();
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      position: 'relative',
      zIndex: smaller ? 1 : 2,
      backgroundColor: theme.palette.background.paper,
      marginLeft: smaller ? -theme.spacing(2) : -theme.spacing(4),
      marginRight: smaller ? -theme.spacing(2) : -theme.spacing(4),
    },
  }));

  const classes = useStyles();

  const initTab = () => {
    const found = findWithExactPath() || findWithRegexPath() || findWithStartsWith();
    return tabs.indexOf(found);
  };

  const findWithExactPath = () => {
    return tabs.find((t) => {
      const { path } = t.props;
      return router.pathname === path;
    });
  };

  const findWithRegexPath = () => {
    return tabs.find((t) => {
      const { regexpath } = t.props;
      if (regexpath) return router.pathname.match(regexpath);
      return false;
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
