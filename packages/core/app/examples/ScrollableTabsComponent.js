"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Business = _interopRequireDefault(require("@material-ui/icons/Business"));

var _AppContainer = _interopRequireDefault(require("../../ui/AppContainer/AppContainer"));

var _ScrollableTabs = _interopRequireDefault(require("../../ui/ScrollableTabs/ScrollableTabs"));

var _ScrollableTabItem = _interopRequireDefault(require("../../ui/ScrollableTabItem/ScrollableTabItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mockedResponse = {
  data: {
    lists: [{
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
  var lists = data.lists;
  var mapIndex = 1;
  return _react["default"].createElement(_AppContainer["default"], null, _react["default"].createElement("div", {
    className: "scrollable-ex"
  }, _react["default"].createElement(_ScrollableTabs["default"], null, _react["default"].createElement(_ScrollableTabItem["default"], {
    label: "Tous",
    icon: _react["default"].createElement(_Business["default"], null),
    onClick: function onClick() {
      return console.log('test');
    },
    index: 0,
    key: "tab-".concat(0)
  }), lists.map(function (item, index) {
    return _react["default"].createElement(_ScrollableTabItem["default"], {
      label: item.name,
      icon: _react["default"].createElement(_Business["default"], null),
      onClick: function onClick() {
        return console.log('test');
      },
      index: mapIndex++,
      key: "tab-".concat(index)
    });
  }))));
}

var _default = ScrollableTabsComponent;
exports["default"] = _default;