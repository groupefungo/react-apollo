import React from 'react';
import useAppContext from "@groupefungo/react-apollo.core/app/UseContext";
import RootComponent from "@groupefungo/react-apollo.core/app/examples/RootComponent";
import RouteComponent from "@groupefungo/react-apollo.core/app/examples/RouteComponent";
import FormComponent from "@groupefungo/react-apollo.core/app/examples/FormComponent";
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