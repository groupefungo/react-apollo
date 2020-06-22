"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Error = _interopRequireDefault(require("./Error"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var error = _ref.error;
  return error.networkError && /*#__PURE__*/_react["default"].createElement(_Error["default"], {
    msg: "".concat(error.networkError.response.url, ": ").concat(error.networkError.response.status)
  }) || error.graphQLErrors && error.graphQLErrors.map(function (_ref2, _) {
    var message = _ref2.message;
    return /*#__PURE__*/_react["default"].createElement(_Error["default"], {
      msg: message
    });
  }) || /*#__PURE__*/_react["default"].createElement(_Error["default"], {
    msg: error
  });
};

exports["default"] = _default;