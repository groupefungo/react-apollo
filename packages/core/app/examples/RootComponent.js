"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ext = _interopRequireDefault(require("../ext"));

var _react = _interopRequireDefault(require("react"));

var _CardGrid = _interopRequireDefault(require("../../ui/CardGrid/CardGrid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  var _useAppExt = (0, _ext["default"])(),
      Link = _useAppExt.Link;

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_CardGrid["default"], {
    data: [{
      id: 1,
      eventDate: '23423',
      kind: 'Patate',
      description: 'this is a description',
      title: 'title'
    }],
    addLabel: "un \xE9v\xE9nement",
    resourcesPath: "/events",
    dateHandler: function dateHandler(e) {
      return e.eventDate;
    },
    categoryHandler: function categoryHandler(e) {
      return e.kind;
    }
  }), _react["default"].createElement("div", null, _react["default"].createElement(Link, {
    to: "/rc"
  }, "To route component (/rc)")), _react["default"].createElement("div", null, _react["default"].createElement(Link, {
    to: "/form"
  }, "To form component (/form)")), _react["default"].createElement("div", null, _react["default"].createElement(Link, {
    to: "/multipurpose_table"
  }, "To MultiPurposeTable component (/multipurpose_table)")));
};

exports["default"] = _default;