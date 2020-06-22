"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCompleteState = void 0;

var _react = require("react");

var _dateFns = require("date-fns");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useCompleteState = function useCompleteState(initState) {
  var _useState = (0, _react.useState)(initState),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var stateChanged = function stateChanged(name, value) {
    setState(_objectSpread(_objectSpread({}, state), {}, _defineProperty({}, name, value)));
  };

  var formInputChanged = function formInputChanged(_ref) {
    var target = _ref.target;
    var name = target.name,
        type = target.type;
    var value = target.value;

    if (type === 'checkbox') {
      value = !state[name];
    }

    stateChanged(name, value);
  };

  var nameWillChangeToValue = function nameWillChangeToValue(name) {
    return function (value) {
      return formInputChanged({
        target: {
          name: name,
          value: value
        }
      });
    };
  };

  var namedDateAttributeToValue = function namedDateAttributeToValue(name) {
    return function (value) {
      console.log('date changed', value);
      var fd = (0, _dateFns.format)(value, 'yyyy-MM-dd ');
      formInputChanged({
        target: {
          name: name,
          value: fd
        }
      });
      console.log('date changed set', fd);
    };
  };

  var stateErrorsToHash = function stateErrorsToHash() {
    var errors = state.errors;
    return errors.keys.reduce(function (errs, cur, i) {
      return _objectSpread(_objectSpread({}, errs), {}, _defineProperty({}, cur, errors.messages[i]));
    }, {});
  };

  var assureState = function assureState() {
    var attr_anchor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'id';

    if (state) {
      if (state[attr_anchor] !== initState[attr_anchor]) {
        setState(initState);
      } else {
        if (initState) {
          var updatedAt = state.updatedAt;
          var initUpdatedAt = initState.updatedAt;

          if (updatedAt && initUpdatedAt && updatedAt !== initUpdatedAt) {
            setState(initState);
          }
        }
      }
    }
  };

  return {
    state: state,
    setState: setState,
    stateChanged: stateChanged,
    formInputChanged: formInputChanged,
    nameWillChangeToValue: nameWillChangeToValue,
    stateErrorsToHash: stateErrorsToHash,
    namedDateAttributeToValue: namedDateAttributeToValue,
    assureState: assureState
  };
};

exports.useCompleteState = useCompleteState;