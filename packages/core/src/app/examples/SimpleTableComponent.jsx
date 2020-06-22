import React from "react";
import useUiContext from '../../ui/UseContext';
import AppContainer from '../../ui/AppContainer/AppContainer';

const mockedResponse = {
  data: {
    clients: [
      {
        id: 1,
        email: "dlarochelle@fungo.ca",
        firstName: "David",
        lastName: "Larochelle",
        __typename: "User"
      },
      {
        "id": 2,
        email: "meridith@nienowbayer.co",
        firstName: "Regine",
        lastName: "Schuster",
        __typename: "User"
      },
      {
        id: "3",
        email: "stephen.oconner@haley.com",
        firstName: "Ione",
        lastName: "Kreiger",
        __typename: "User"
      },
      {
        id: "4",
        gid: "Z2lkOi8vd2VkZGluZy13YXJkcm9iZS9Vc2VyLzQ",
        email: "ngan_blick@nikolaus.com",
        firstName: "Yuonne",
        lastName: "Aufderhar",
        __typename: "User"
      },
      {
        id: "5",
        gid: "Z2lkOi8vd2VkZGluZy13YXJkcm9iZS9Vc2VyLzU",
        email: "sung@abshire.inf",
        firstName: "Eusebio",
        lastName: "Marquardt",
        __typename: "User"
      },
      {
        id: "6",
        gid: "Z2lkOi8vd2VkZGluZy13YXJkcm9iZS9Vc2VyLzY",
        email: "kera.grant@wolff.biz",
        firstName: "Lee",
        lastName: "Lakin",
        __typename: "User"
      },
      {
        id: "7",
        gid: "Z2lkOi8vd2VkZGluZy13YXJkcm9iZS9Vc2VyLzc",
        email: "marvin.kautzer@hintzschulist.com",
        firstName: "Darron",
        lastName: "Collins",
        __typename: "User"
      },
      {
        id: "8",
        gid: "Z2lkOi8vd2VkZGluZy13YXJkcm9iZS9Vc2VyLzg",
        email: "verlene_carter@balistreri.org",
        firstName: "Latanya",
        lastName: "Moen",
        __typename: "User"
      },
      {
        id: "9",
        gid: "Z2lkOi8vd2VkZGluZy13YXJkcm9iZS9Vc2VyLzk",
        email: "danna_hodkiewicz@boehm.name",
        firstName: "Benton",
        lastName: "Schumm",
        __typename: "User"
      },
      {
        id: "10",
        gid: "Z2lkOi8vd2VkZGluZy13YXJkcm9iZS9Vc2VyLzEw",
        email: "isaura.streich@lehnerdicki.io",
        firstName: "Amanda",
        lastName: "Mraz",
        __typename: "User"
      }
    ]
  }
};

function SimpleTableComponent() {
  const {SimpleTable, Chip} = useUiContext();

  const SpecialColumn = (value) => <Chip label={value}/>;
  const columns = [{name: 'email', component: SpecialColumn}, 'firstName', 'lastName'];
  const headers = [
    {label: 'Email'},
    {label: 'First Name'},
    {label: 'Last Name'},
  ];

  const handleRowClick = (id) => () => {
    console.log(id, ' : Row Clicked')
  };

  const {data} = mockedResponse;
  const {clients} = data;
  return (
    <AppContainer>
      <SimpleTable
        rows={clients}
        headers={headers}
        columns={columns}
        handleRowClick={handleRowClick}
      />
    </AppContainer>
  )
}

export default SimpleTableComponent;
