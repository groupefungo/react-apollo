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
  return error.networkError && _react["default"].createElement(_Error["default"], {
    msg: "".concat(error.networkError.response.url, ": ").concat(error.networkError.response.status)
  }) || error.graphQLErrors && error.graphQLErrors.map(function (_ref2, _) {
    var message = _ref2.message;
    return _react["default"].createElement(_Error["default"], {
      msg: message
    });
  }) || _react["default"].createElement(_Error["default"], {
    msg: error
  });
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91aS9EZXZFcnJvci50c3giXSwibmFtZXMiOlsiZXJyb3IiLCJuZXR3b3JrRXJyb3IiLCJyZXNwb25zZSIsInVybCIsInN0YXR1cyIsImdyYXBoUUxFcnJvcnMiLCJtYXAiLCJfIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O2VBRWU7QUFBQSxNQUFFQSxLQUFGLFFBQUVBLEtBQUY7QUFBQSxTQUVWQSxLQUFLLENBQUNDLFlBQU4sSUFDQyxnQ0FBQyxpQkFBRDtBQUFPLElBQUEsR0FBRyxZQUFLRCxLQUFLLENBQUNDLFlBQU4sQ0FBbUJDLFFBQW5CLENBQTRCQyxHQUFqQyxlQUF5Q0gsS0FBSyxDQUFDQyxZQUFOLENBQW1CQyxRQUFuQixDQUE0QkUsTUFBckU7QUFBVixJQURGLElBSUNKLEtBQUssQ0FBQ0ssYUFBTixJQUNDTCxLQUFLLENBQUNLLGFBQU4sQ0FBb0JDLEdBQXBCLENBQXdCLGlCQUFZQyxDQUFaO0FBQUEsUUFBRUMsT0FBRixTQUFFQSxPQUFGO0FBQUEsV0FDdEIsZ0NBQUMsaUJBQUQ7QUFBTyxNQUFBLEdBQUcsRUFBRUE7QUFBWixNQURzQjtBQUFBLEdBQXhCLENBTEYsSUFTQSxnQ0FBQyxpQkFBRDtBQUFPLElBQUEsR0FBRyxFQUFFUjtBQUFaLElBWFc7QUFBQSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVycm9yIGZyb20gXCIuL0Vycm9yXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0ICh7ZXJyb3J9KSA9PiAoXG4gIChcbiAgICAoZXJyb3IubmV0d29ya0Vycm9yICYmIChcbiAgICAgIDxFcnJvciBtc2c9e2Ake2Vycm9yLm5ldHdvcmtFcnJvci5yZXNwb25zZS51cmx9OiAke2Vycm9yLm5ldHdvcmtFcnJvci5yZXNwb25zZS5zdGF0dXN9YH0vPlxuICAgICkpXG4gICAgfHxcbiAgICAoZXJyb3IuZ3JhcGhRTEVycm9ycyAmJiAoXG4gICAgICBlcnJvci5ncmFwaFFMRXJyb3JzLm1hcCgoe21lc3NhZ2V9LCBfKSA9PiAoXG4gICAgICAgIDxFcnJvciBtc2c9e21lc3NhZ2V9Lz5cbiAgICAgICkpKSlcbiAgICB8fFxuICAgIDxFcnJvciBtc2c9e2Vycm9yfS8+XG4gIClcbikiXX0=