"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("../../ui/UseContext"));

var _AppContainer = _interopRequireDefault(require("../../ui/AppContainer/AppContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mockedResponse = {
  data: {
    clients: [{
      id: 1,
      email: "dlarochelle@fungo.ca",
      firstName: "David",
      lastName: "Larochelle",
      __typename: "User"
    }, {
      "id": 2,
      email: "meridith@nienowbayer.co",
      firstName: "Regine",
      lastName: "Schuster",
      __typename: "User"
    }, {
      id: "3",
      email: "stephen.oconner@haley.com",
      firstName: "Ione",
      lastName: "Kreiger",
      __typename: "User"
    }, {
      id: "4",
      gid: "Z2lkOi8vd2VkZGluZy13YXJkcm9iZS9Vc2VyLzQ",
      email: "ngan_blick@nikolaus.com",
      firstName: "Yuonne",
      lastName: "Aufderhar",
      __typename: "User"
    }, {
      id: "5",
      gid: "Z2lkOi8vd2VkZGluZy13YXJkcm9iZS9Vc2VyLzU",
      email: "sung@abshire.inf",
      firstName: "Eusebio",
      lastName: "Marquardt",
      __typename: "User"
    }, {
      id: "6",
      gid: "Z2lkOi8vd2VkZGluZy13YXJkcm9iZS9Vc2VyLzY",
      email: "kera.grant@wolff.biz",
      firstName: "Lee",
      lastName: "Lakin",
      __typename: "User"
    }, {
      id: "7",
      gid: "Z2lkOi8vd2VkZGluZy13YXJkcm9iZS9Vc2VyLzc",
      email: "marvin.kautzer@hintzschulist.com",
      firstName: "Darron",
      lastName: "Collins",
      __typename: "User"
    }, {
      id: "8",
      gid: "Z2lkOi8vd2VkZGluZy13YXJkcm9iZS9Vc2VyLzg",
      email: "verlene_carter@balistreri.org",
      firstName: "Latanya",
      lastName: "Moen",
      __typename: "User"
    }, {
      id: "9",
      gid: "Z2lkOi8vd2VkZGluZy13YXJkcm9iZS9Vc2VyLzk",
      email: "danna_hodkiewicz@boehm.name",
      firstName: "Benton",
      lastName: "Schumm",
      __typename: "User"
    }, {
      id: "10",
      gid: "Z2lkOi8vd2VkZGluZy13YXJkcm9iZS9Vc2VyLzEw",
      email: "isaura.streich@lehnerdicki.io",
      firstName: "Amanda",
      lastName: "Mraz",
      __typename: "User"
    }]
  }
};

function SimpleTableComponent() {
  var _useUiContext = (0, _UseContext["default"])(),
      SimpleTable = _useUiContext.SimpleTable,
      Chip = _useUiContext.Chip;

  var SpecialColumn = function SpecialColumn(value) {
    return _react["default"].createElement(Chip, {
      label: value
    });
  };

  var columns = [{
    name: 'email',
    component: SpecialColumn
  }, 'firstName', 'lastName'];
  var headers = [{
    label: 'Email'
  }, {
    label: 'First Name'
  }, {
    label: 'Last Name'
  }];

  var handleRowClick = function handleRowClick(id) {
    return function () {
      console.log(id, ' : Row Clicked');
    };
  };

  var data = mockedResponse.data;
  var clients = data.clients;
  return _react["default"].createElement(_AppContainer["default"], null, _react["default"].createElement(SimpleTable, {
    rows: clients,
    headers: headers,
    columns: columns,
    handleRowClick: handleRowClick
  }));
}

var _default = SimpleTableComponent;
exports["default"] = _default;