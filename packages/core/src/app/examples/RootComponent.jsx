import useAppExt from "../ext";
import React from "react";
import useUiContext from '../../ui/UseContext';
import CardGrid from "../../ui/CardGrid/CardGrid";

export default () => {
  const { Link } = useAppExt();
  const { Container } = useUiContext();

  const data = [{
    id: 1,
    eventDate: '23423',
    kind: 'Patate',
    description: '103\n' +
      '\n' +
      'Looks like your requirement is just to fade out the text beginning at a' +
      ' certain height (about 150px), the text (if any) presenting at that height is considered as overflow. ' +
      'So you can try using some kind of transparent linear gradient layer placed on top of the text area, we can achieve this in a ' +
      'neat way using the pseudo-element Looks like your requirement is just to fade out the text beginning at a certain height ' +
      '(about 150px), the text (if any) presenting at that height is ' +
      'considered as overflow. So you can try using some kind of transparent linear gradient layer placed on top of the text' +
      ' area, we can achieve this in a neat way using the pseudo-element ',
    title: 'title'
  },
    {
      id: 1,
      eventDate: '23423',
      kind: 'Patate',
      description: '103\n' +
        '\n' +
        'Looks like your requirement is just to fade out the text beginning at a' +
        ' certain height (about 150px), the text (if any) presenting at that height is considered as overflow. ',
      title: 'title'
    }
  ];

  return (
    <Container>
      <div style={{ margin: '24px 0' }}>in body</div>

      <div style={{ marginBottom: 24 }}>
        <CardGrid
          data={data}
          addLabel="un événement"
          resourcesPath="/events"
          action={(obj) => () => console.log('action clicked', obj.id)}
          actionLabel="View this object"
          dateHandler={(e) => e.eventDate}
          categoryHandler={(e) => e.kind}
        />
      </div>

      <div>
        <Link to="/rc">To route component (/rc)</Link>
      </div>
      <div>
        <Link to="/form">To form component (/form)</Link>
      </div>

      <div>
        <Link to="/multipurpose_table">To MultiPurposeTable component (/multipurpose_table)</Link>
      </div>

      <div>
        <Link to="/simple_table">To SimpleTable component (/simple_table)</Link>
      </div>

      <div>
        <Link to="/scrollable_tabs">To ScrollableTabs component (/scrollable_tabs)</Link>
      </div>

      <div style={{ marginBottom: 24 }}>
        <Link to="/alertuser">Alert user</Link>
      </div>
    </Container>
  );
}
