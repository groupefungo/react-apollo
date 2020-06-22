"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ext = _interopRequireDefault(require("../ext"));

var _react = _interopRequireDefault(require("react"));

var _CardGrid = _interopRequireDefault(require("../../ui/CardGrid/CardGrid"));

var _AppContainer = _interopRequireDefault(require("../../ui/AppContainer/AppContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  var _useAppExt = (0, _ext["default"])(),
      Link = _useAppExt.Link;

  var data = [{
    id: 1,
    eventDate: '23423',
    kind: 'Patate',
    description: '103\n' + '\n' + 'Looks like your requirement is just to fade out the text beginning at a' + ' certain height (about 150px), the text (if any) presenting at that height is considered as overflow. ' + 'So you can try using some kind of transparent linear gradient layer placed on top of the text area, we can achieve this in a ' + 'neat way using the pseudo-element Looks like your requirement is just to fade out the text beginning at a certain height ' + '(about 150px), the text (if any) presenting at that height is ' + 'considered as overflow. So you can try using some kind of transparent linear gradient layer placed on top of the text' + ' area, we can achieve this in a neat way using the pseudo-element ',
    title: 'title'
  }, {
    id: 1,
    eventDate: '23423',
    kind: 'Patate',
    description: '103\n' + '\n' + 'Looks like your requirement is just to fade out the text beginning at a' + ' certain height (about 150px), the text (if any) presenting at that height is considered as overflow. ',
    title: 'title'
  }];
  return /*#__PURE__*/_react["default"].createElement(_AppContainer["default"], null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      margin: '24px 0'
    }
  }, "in body"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/_react["default"].createElement(_CardGrid["default"], {
    data: data,
    addLabel: "un \xE9v\xE9nement",
    resourcesPath: "/events",
    action: function action(obj) {
      return function () {
        return console.log('action clicked', obj.id);
      };
    },
    actionLabel: "View this object",
    dateHandler: function dateHandler(e) {
      return e.eventDate;
    },
    categoryHandler: function categoryHandler(e) {
      return e.kind;
    }
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(Link, {
    to: "/rc"
  }, "To route component (/rc)")), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(Link, {
    to: "/form"
  }, "To form component (/form)")), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(Link, {
    to: "/multipurpose_table"
  }, "To MultiPurposeTable component (/multipurpose_table)")), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(Link, {
    to: "/simple_table"
  }, "To SimpleTable component (/simple_table)")), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(Link, {
    to: "/scrollable_tabs"
  }, "To ScrollableTabs component (/scrollable_tabs)")), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(Link, {
    to: "/alertuser"
  }, "Alert user")));
};

exports["default"] = _default;