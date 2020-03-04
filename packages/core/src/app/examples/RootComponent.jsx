import appUses from "../ext";
import React from "react";
import CardGrid from "../../ui/CardGrid/CardGrid";

export default () => {
  const {Link} = appUses;
  return (
    <>
      <CardGrid
        data={[{id: 1, eventDate: '23423', kind: 'Patate', description: 'this is a description', title: 'title'}]}
        addLabel="un événement"
        resourcesPath="/events"
        dateHandler={(e) => e.eventDate}
        categoryHandler={(e) => e.kind}
      />

      <div>
        <Link to="/rc">To route component (/rc)</Link>
      </div>
      <div>
        <Link to="/form">To form component (/form)</Link>
      </div>
    </>
  );
}