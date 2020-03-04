import React from 'react';
import useAppContext from "../UseContext";
import RootComponent from "./RootComponent";
import RouteComponent from "./RouteComponent";
import FormComponent from "./FormComponent";
import AppLayout from "./AppLayout";

export default () => {
  const {Route, Switch} = useAppContext();

  return (
    <>
      <AppLayout/>

      <div>in body</div>
      <Switch>
        <Route component={RootComponent} path={'/'} exact/>
        <Route component={RouteComponent} path={'/rc'} exact/>
        <Route component={FormComponent} path={'/form'} exact/>
      </Switch>
    </>
  )
};