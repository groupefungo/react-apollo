import React from "react";
import AppContainer from '../../ui/AppContainer/AppContainer';
import Tabs from '../../ui/ScrollableTabs/ScrollableTabs';
import Tab from "../../ui/ScrollableTabItem";

const mockedResponse = {
  data: {
    list: [
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
  const {list} = data;

  return (
    <AppContainer>
      <div className="scrollable-ex">
        <Tabs>
          <Tab
            label="Tous"
            onClick={() => console.log('test')}
            index={0}
            key={`tab-${0}`}
          />
          {list.map((item, index) => (
            <Tab
              label={item.name}
              onClick={() => console.log('list tab clicked')}
              index={(index + 1)}
              key={`tab-${index + 1}`}
            />)
          )}
        </Tabs>
      </div>
    </AppContainer>
  )
}

export default ScrollableTabsComponent;
