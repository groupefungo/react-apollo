"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = _interopRequireDefault(require("."));

var _ui = _interopRequireDefault(require("../ui"));

var _ErrorBoundary = _interopRequireDefault(require("../ui/ErrorBoundary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var children = _ref.children,
      t = _ref.t;
  return _react["default"].createElement(_ErrorBoundary["default"], null, _react["default"].createElement(_ui["default"], {
    t: t
  }, _react["default"].createElement(_["default"], null, children)));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvQ29udGFpbmVyLnRzeCJdLCJuYW1lcyI6WyJjaGlsZHJlbiIsInQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztlQUVlLHdCQUFtQjtBQUFBLE1BQWpCQSxRQUFpQixRQUFqQkEsUUFBaUI7QUFBQSxNQUFQQyxDQUFPLFFBQVBBLENBQU87QUFDaEMsU0FDRSxnQ0FBQyx5QkFBRCxRQUNFLGdDQUFDLGNBQUQ7QUFBc0IsSUFBQSxDQUFDLEVBQUVBO0FBQXpCLEtBQ0UsZ0NBQUMsWUFBRCxRQUNHRCxRQURILENBREYsQ0FERixDQURGO0FBU0QsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwQ29udGV4dFByb3ZpZGVyIGZyb20gJy4nO1xuaW1wb3J0IFRoZW1lQ29udGV4dFByb3ZpZGVyIGZyb20gJy4uL3VpJztcbmltcG9ydCBFcnJvckJvdW5kYXJ5IGZyb20gXCIuLi91aS9FcnJvckJvdW5kYXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0ICh7Y2hpbGRyZW4sIHR9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEVycm9yQm91bmRhcnk+XG4gICAgICA8VGhlbWVDb250ZXh0UHJvdmlkZXIgdD17dH0+XG4gICAgICAgIDxBcHBDb250ZXh0UHJvdmlkZXI+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0FwcENvbnRleHRQcm92aWRlcj5cbiAgICAgIDwvVGhlbWVDb250ZXh0UHJvdmlkZXI+XG4gICAgPC9FcnJvckJvdW5kYXJ5PlxuICApO1xufSJdfQ==