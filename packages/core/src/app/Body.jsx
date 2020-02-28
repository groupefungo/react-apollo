import React from 'react';
import appUses from "./ext";
import CardGrid from "../ui/CardGrid";

const RootComponent = () => {
  const {Link} = appUses;
  return (<div><Link to="/rc">To route component (/rc)</Link></div>);
}
const RouteComponent = () => (<div>in route component</div>);

export default () => {
  const {Route, Switch} = appUses;

  return (
    <>
      <CardGrid
        data={[{id: 1, eventDate: '23423', kind: 'Patate', description: 'this is a description', title: 'title'}]}
        addLabel="un événement"
        resourcesPath="/events"
        dateHandler={(e) => e.eventDate}
        categoryHandler={(e) => e.kind}
      />

      in body
      <Switch>
        <Route component={RootComponent} path={'/'} exact/>
        <Route component={RouteComponent} path={'/rc'} exact/>
      </Switch>
    </>
  )
};