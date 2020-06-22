import React from "react";
import BusinessIcon from '@material-ui/icons/Business';
import AppContainer from '../../ui/AppContainer/AppContainer';
import ScrollableTabs from '../../ui/ScrollableTabs/ScrollableTabs';
import TabItem from '../../ui/ScrollableTabItem/ScrollableTabItem';

const mockedResponse = {
  data: {
    lists: [
      {
        id: 1,
        name: "David",
      },
      {
        "id": 2,
        name: "Regine",
      },
      {
        id: "3",
        name: "Ione",
      },
      {
        id: "4",
        name: "Yuonne",
      },
      {
        id: "5",
        name: "Eusebio",
      },
      {
        id: "6",
        name: "Lee",
      },
      {
        id: "7",
        name: "Darron",
      },
      {
        id: "8",
        name: "Latanya",
      },
      {
        id: "9",
        name: "Benton",
      },
      {
        id: "10",
        name: "Amanda",
      }
    ]
  }
};

function ScrollableTabsComponent() {
  const {data} = mockedResponse;
  const {lists} = data;
  let mapIndex = 1;

  return (
    <AppContainer>
      <div className="scrollable-ex">
        <ScrollableTabs>
          <TabItem
            label="Tous"
            icon={<BusinessIcon/>}
            onClick={() => console.log('test')}
            index={0}
            key={`tab-${0}`}
          />
          {lists.map((item, index) => (<TabItem
              label={item.name}
              icon={<BusinessIcon/>}
              onClick={() => console.log('test')}
              index={mapIndex++}
              key={`tab-${index}`}
            />)
          )}
        </ScrollableTabs>
      </div>
    </AppContainer>
  )
}

export default ScrollableTabsComponent;
