"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("./UseContext"));

var _Error = _interopRequireDefault(require("../ui/Error"));

var _hasRole = _interopRequireDefault(require("./hasRole"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = function _default(_ref) {
  var Component = _ref.component,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["component", "children"]);

  var _useAppContext = (0, _UseContext["default"])(),
      Route = _useAppContext.Route;

  var admin = (0, _hasRole["default"])('admin');
  return _react["default"].createElement(Route, _extends({}, rest, {
    render: function render(props) {
      return admin ? _react["default"].createElement(Component, _extends({}, props, rest)) : _react["default"].createElement(_Error["default"], {
        msg: "Vous n'avez pas le droit."
      });
    }
  }));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvQWRtaW5Sb3V0ZS50c3giXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiY29tcG9uZW50IiwiY2hpbGRyZW4iLCJyZXN0IiwiUm91dGUiLCJhZG1pbiIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7ZUFRZSx3QkFBeUQ7QUFBQSxNQUEzQ0EsU0FBMkMsUUFBdERDLFNBQXNEO0FBQUEsTUFBaENDLFFBQWdDLFFBQWhDQSxRQUFnQztBQUFBLE1BQW5CQyxJQUFtQjs7QUFBQSx1QkFDcEQsNkJBRG9EO0FBQUEsTUFDOURDLEtBRDhELGtCQUM5REEsS0FEOEQ7O0FBRXRFLE1BQU1DLEtBQUssR0FBRyx5QkFBUSxPQUFSLENBQWQ7QUFDQSxTQUNFLGdDQUFDLEtBQUQsZUFDTUYsSUFETjtBQUVFLElBQUEsTUFBTSxFQUFFLGdCQUFDRyxLQUFEO0FBQUEsYUFDTkQsS0FBSyxHQUNELGdDQUFDLFNBQUQsZUFBZUMsS0FBZixFQUEwQkgsSUFBMUIsRUFEQyxHQUVELGdDQUFDLGlCQUFEO0FBQU8sUUFBQSxHQUFHLEVBQUM7QUFBWCxRQUhFO0FBQUE7QUFGVixLQURGO0FBVUQsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlQXBwQ29udGV4dCBmcm9tICcuL1VzZUNvbnRleHQnO1xuaW1wb3J0IEVycm9yIGZyb20gJy4uL3VpL0Vycm9yJztcbmltcG9ydCBoYXNSb2xlIGZyb20gJy4vaGFzUm9sZSc7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICBjb21wb25lbnQ6IGFueTtcbiAgLy8gYW55IG90aGVyIHByb3BzIHRoYXQgY29tZSBpbnRvIHRoZSBjb21wb25lbnRcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHsgY29tcG9uZW50OiBDb21wb25lbnQsIGNoaWxkcmVuLCAuLi5yZXN0IH06IElQcm9wcykgPT4ge1xuICBjb25zdCB7IFJvdXRlIH0gPSB1c2VBcHBDb250ZXh0KCk7XG4gIGNvbnN0IGFkbWluID0gaGFzUm9sZSgnYWRtaW4nKTtcbiAgcmV0dXJuIChcbiAgICA8Um91dGVcbiAgICAgIHsuLi5yZXN0fVxuICAgICAgcmVuZGVyPXsocHJvcHMpID0+IChcbiAgICAgICAgYWRtaW5cbiAgICAgICAgICA/IDxDb21wb25lbnQgey4uLnByb3BzfSB7Li4ucmVzdH0gLz5cbiAgICAgICAgICA6IDxFcnJvciBtc2c9XCJWb3VzIG4nYXZleiBwYXMgbGUgZHJvaXQuXCIgLz5cbiAgICAgICl9XG4gICAgLz5cbiAgKTtcbn07XG4iXX0=