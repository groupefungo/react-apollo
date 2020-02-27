import React from 'react';
import {appUses} from "@groupefungo/js-modules-core/Context";

const RootComponent = () => {
  const {Link} = appUses;
  return (<div><Link to="/rc">To route component (/rc)</Link></div>);
}
const RouteComponent = () => (<div>in route component</div>);

export default () => {
  const {Route, Switch} = appUses;

  return (
    <>
      in body
      <Switch>
        <Route component={RootComponent} path={'/'} exact/>
        <Route component={RouteComponent} path={'/rc'} exact/>
      </Switch>
    </>
  )
};