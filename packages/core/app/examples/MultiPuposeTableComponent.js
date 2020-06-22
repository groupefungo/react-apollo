"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("../../ui/UseContext"));

var _UseContext2 = _interopRequireDefault(require("../../app/UseContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mockedResponse = {
  data: {
    users: {
      edges: [{
        node: {
          id: 1,
          gid: "Z2lkOi8vd2VkZGluZy13YXJkcm9iZS9Vc2VyLzE",
          email: "dlarochelle@fungo.ca",
          firstName: "David",
          lastName: "Larochelle",
          __typename: "User"
        },
        __typename: "UserEdge"
      }, {
        node: {
          "id": 2,
          gid: "Z2lkOi8vd2VkZGluZy13YXJkcm9iZS9Vc2VyLzI",
          email: "meridith@nienowbayer.co",
          firstName: "Regine",
          lastName: "Schuster",
          __typename: "User"
        },
        __typename: "UserEdge"
      }, {
        node: {
          id: "3",
          gid: "Z2lkOi8vd2VkZGluZy13YXJkcm9iZS9Vc2VyLzM",
          email: "stephen.oconner@haley.com",
          firstName: "Ione",
          lastName: "Kreiger",
          __typename: "User"
        },
        __typename: "UserEdge"
      }, {
        node: {
          id: "4",
          gid: "Z2lkOi8vd2VkZGluZy13YXJkcm9iZS9Vc2VyLzQ",
          email: "ngan_blick@nikolaus.com",
          firstName: "Yuonne",
          lastName: "Aufderhar",
          __typename: "User"
        },
        __typename: "UserEdge"
      }, {
        node: {
          id: "5",
          gid: "Z2lkOi8vd2VkZGluZy13YXJkcm9iZS9Vc2VyLzU",
          email: "sung@abshire.inf",
          firstName: "Eusebio",
          lastName: "Marquardt",
          __typename: "User"
        },
        __typename: "UserEdge"
      }, {
        node: {
          id: "6",
          gid: "Z2lkOi8vd2VkZGluZy13YXJkcm9iZS9Vc2VyLzY",
          email: "kera.grant@wolff.biz",
          firstName: "Lee",
          lastName: "Lakin",
          __typename: "User"
        },
        __typename: "UserEdge"
      }, {
        node: {
          id: "7",
          gid: "Z2lkOi8vd2VkZGluZy13YXJkcm9iZS9Vc2VyLzc",
          email: "marvin.kautzer@hintzschulist.com",
          firstName: "Darron",
          lastName: "Collins",
          __typename: "User"
        },
        __typename: "UserEdge"
      }, {
        node: {
          id: "8",
          gid: "Z2lkOi8vd2VkZGluZy13YXJkcm9iZS9Vc2VyLzg",
          email: "verlene_carter@balistreri.org",
          firstName: "Latanya",
          lastName: "Moen",
          __typename: "User"
        },
        __typename: "UserEdge"
      }, {
        node: {
          id: "9",
          gid: "Z2lkOi8vd2VkZGluZy13YXJkcm9iZS9Vc2VyLzk",
          email: "danna_hodkiewicz@boehm.name",
          firstName: "Benton",
          lastName: "Schumm",
          __typename: "User"
        },
        __typename: "UserEdge"
      }, {
        node: {
          id: "10",
          gid: "Z2lkOi8vd2VkZGluZy13YXJkcm9iZS9Vc2VyLzEw",
          email: "isaura.streich@lehnerdicki.io",
          firstName: "Amanda",
          lastName: "Mraz",
          __typename: "User"
        },
        __typename: "UserEdge"
      }],
      pageInfo: {
        startCursor: "MQ",
        endCursor: "MTA",
        hasNextPage: true,
        hasPreviousPage: false,
        __typename: "PageInfo"
      },
      __typename: "UserConnection"
    }
  }
};
var baseConnectionFilters = {
  first: 10,
  last: null,
  after: null,
  before: null,
  reverse: null,
  sortKey: null,
  query: ''
};

function MultiPurposeTableComponent() {
  var _useUiContext = (0, _UseContext["default"])(),
      MultiPurposeTable = _useUiContext.MultiPurposeTable,
      Chip = _useUiContext.Chip;

  var _useAppContext = (0, _UseContext2["default"])(),
      useCompleteState = _useAppContext.useCompleteState;

  var connectionState = useCompleteState(baseConnectionFilters);

  var SpecialColumn = function SpecialColumn(value) {
    return /*#__PURE__*/_react["default"].createElement(Chip, {
      label: value
    });
  };

  var columns = [{
    name: 'email',
    component: SpecialColumn
  }, 'firstName', 'lastName'];
  var headersOptions = [{
    label: 'Email',
    sortKey: 'email'
  }, {
    label: 'First Name',
    sortKey: 'first_name'
  }, {
    label: 'Last Name',
    sortKey: 'last_name'
  }];

  var handleRowClick = function handleRowClick(gid) {
    return function () {
      console.log(gid, ' : Row Clicked');
    };
  };

  var data = mockedResponse.data;
  var loading = false;
  return /*#__PURE__*/_react["default"].createElement(MultiPurposeTable, {
    connectionState: connectionState,
    columns: columns,
    data: data || {},
    headers: headersOptions,
    loading: loading,
    objects: "users",
    handleRowClick: handleRowClick
  });
}

var _default = MultiPurposeTableComponent;
exports["default"] = _default;