"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Container = _interopRequireDefault(require("./app/Container"));

var _Body = _interopRequireDefault(require("./app/examples/Body"));

var _muithemeOverride = _interopRequireDefault(require("./muitheme-override"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MyApp = function MyApp() {
  return _react["default"].createElement(_Container["default"], {
    t: _muithemeOverride["default"]
  }, _react["default"].createElement(_Body["default"], null));
};

_reactDom["default"].render(_react["default"].createElement(MyApp, null), document.getElementById('root'));

console.log(process.env.NODE_ENV);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmRleC50c3giXSwibmFtZXMiOlsiTXlBcHAiLCJ0IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7OztBQUNBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFDbEIsU0FDRSxnQ0FBQyxxQkFBRDtBQUFLLElBQUEsQ0FBQyxFQUFFQztBQUFSLEtBQ0UsZ0NBQUMsZ0JBQUQsT0FERixDQURGO0FBS0QsQ0FORDs7QUFRQUMscUJBQVNDLE1BQVQsQ0FBZ0IsZ0NBQUMsS0FBRCxPQUFoQixFQUEwQkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQTFCOztBQUVBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFFBQXhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwL0NvbnRhaW5lcic7XG5pbXBvcnQgQXBwQm9keSBmcm9tICcuL2FwcC9leGFtcGxlcy9Cb2R5JztcblxuaW1wb3J0IHQgZnJvbSAnLi9tdWl0aGVtZS1vdmVycmlkZSc7XG5jb25zdCBNeUFwcCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8QXBwIHQ9e3R9PlxuICAgICAgPEFwcEJvZHkgLz5cbiAgICA8L0FwcD5cbiAgKTtcbn07XG5cblJlYWN0RE9NLnJlbmRlcig8TXlBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XG5cbmNvbnNvbGUubG9nKHByb2Nlc3MuZW52Lk5PREVfRU5WKTtcbiJdfQ==