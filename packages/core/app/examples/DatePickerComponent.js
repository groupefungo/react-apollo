"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _useUiContext2 = require("../../ui/UseContext/useUiContext");

var _useAppContext2 = require("../UseContext/useAppContext");

var _dateFns = require("date-fns");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = function _default() {
  var d = (0, _dateFns.parse)('2020-03-31', 'yyyy-MM-dd', new Date());
  console.log('init date', d);
  var initState = {
    eventDate: d
  };

  var _useAppContext = (0, _useAppContext2.useAppContext)(),
      useCompleteState = _useAppContext.useCompleteState;

  var _useCompleteState = useCompleteState(initState),
      state = _useCompleteState.state,
      namedDateAttributeToValue = _useCompleteState.namedDateAttributeToValue;

  var _useUiContext = (0, _useUiContext2.useUiContext)(),
      KeyboardDatePickerBase = _useUiContext.KeyboardDatePickerBase;

  var picked = function picked(date) {
    console.log('picked', date);
    namedDateAttributeToValue('eventDate')(date);
  };

  var eventDate = state.eventDate;
  console.log('rendering event date', eventDate);
  return _react["default"].createElement(KeyboardDatePickerBase, {
    name: "eventDate",
    value: eventDate,
    changed: picked
  });
};

exports["default"] = _default;