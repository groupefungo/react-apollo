import React from 'react';
import useAppContext from "../UseContext";
import RootComponent from "./RootComponent";
import RouteComponent from "./RouteComponent";
import FormComponent from "./FormComponent";
import AppLayout from "./AppLayout";
import MultiPurposeTableComponent from "./MultiPuposeTableComponent";
import DatePickerComponent from "./DatePickerComponent";
import SimpleTableComponent from "./SimpleTableComponent";
import AlertUser from "../../ui/AlertUser";
import TellUser from "./TellUser";
import PinchZoomPanComponentTest from './PinchZoomPanComponentTest'

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
        <Route component={DatePickerComponent} path={'/datepicker'} exact />
        <Route component={MultiPurposeTableComponent} path={'/multipurpose_table'} exact />
        <Route component={SimpleTableComponent} path={'/simple_table'} exact />
        <Route component={TellUser} path={'/alertUser'} exact />
        <Route component={PinchZoomPanComponentTest} path={'/pinch_zoom_pan'} exact/>
      </Switch>

      <AlertUser />
    </>
  )
};
