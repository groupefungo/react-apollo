"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _AppContainer = _interopRequireDefault(require("../../ui/AppContainer/AppContainer"));

var _ScrollableTabs = _interopRequireDefault(require("../../ui/ScrollableTabs/ScrollableTabs"));

var _ScrollableTabItem = _interopRequireDefault(require("../../ui/ScrollableTabItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mockedResponse = {
  data: {
    list: [{
      id: 1,
      name: "David"
    }, {
      "id": 2,
      name: "Regine"
    }, {
      id: "3",
      name: "Ione"
    }, {
      id: "4",
      name: "Yuonne"
    }, {
      id: "5",
      name: "Eusebio"
    }, {
      id: "6",
      name: "Lee"
    }, {
      id: "7",
      name: "Darron"
    }, {
      id: "8",
      name: "Latanya"
    }, {
      id: "9",
      name: "Benton"
    }, {
      id: "10",
      name: "Amanda"
    }]
  }
};

function ScrollableTabsComponent() {
  var data = mockedResponse.data;
  var list = data.list;
  return /*#__PURE__*/_react["default"].createElement(_AppContainer["default"], null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "scrollable-ex"
  }, /*#__PURE__*/_react["default"].createElement(_ScrollableTabs["default"], null, /*#__PURE__*/_react["default"].createElement(_ScrollableTabItem["default"], {
    label: "Tous",
    onClick: function onClick() {
      return console.log('test');
    },
    index: 0,
    key: "tab-".concat(0)
  }), list.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(_ScrollableTabItem["default"], {
      label: item.name,
      onClick: function onClick() {
        return console.log('list tab clicked');
      },
      index: index + 1,
      key: "tab-".concat(index + 1)
    });
  }))));
}

var _default = ScrollableTabsComponent;
exports["default"] = _default;