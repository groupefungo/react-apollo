"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _DevError = _interopRequireDefault(require("./DevError"));

var _Error = _interopRequireDefault(require("./Error"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ErrorBoundary =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);

  function ErrorBoundary(props) {
    var _this;

    _classCallCheck(this, ErrorBoundary);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ErrorBoundary).call(this, props));
    _this.state = {
      hasError: false,
      error: {}
    };
    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        var error = this.state.error; // You can render any custom fallback UI

        return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("h1", null, "Something went wrong."), 'development' === process.env.NODE_ENV && _react["default"].createElement(_DevError["default"], {
          error: error
        }) || 'production' === process.env.NODE_ENV && _react["default"].createElement(_Error["default"], {
          error: "error: call tech. suppoprt"
        }));
      }

      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return {
        hasError: true,
        error: error
      };
    }
  }]);

  return ErrorBoundary;
}(_react["default"].Component);

exports["default"] = ErrorBoundary;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91aS9FcnJvckJvdW5kYXJ5LnRzeCJdLCJuYW1lcyI6WyJFcnJvckJvdW5kYXJ5IiwicHJvcHMiLCJzdGF0ZSIsImhhc0Vycm9yIiwiZXJyb3IiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJjaGlsZHJlbiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGE7Ozs7O0FBQ25CLHlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLHVGQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLE1BQUFBLFFBQVEsRUFBRSxLQURDO0FBRVhDLE1BQUFBLEtBQUssRUFBRTtBQUZJLEtBQWI7QUFGaUI7QUFNbEI7Ozs7NkJBVVE7QUFDUCxVQUFJLEtBQUtGLEtBQUwsQ0FBV0MsUUFBZixFQUF5QjtBQUFBLFlBQ2hCQyxLQURnQixHQUNQLEtBQUtGLEtBREUsQ0FDaEJFLEtBRGdCLEVBRXZCOztBQUNBLGVBQ0Usa0VBQ0Usb0VBREYsRUFHSyxrQkFBa0JDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUE5QixJQUNDLGdDQUFDLG9CQUFEO0FBQVUsVUFBQSxLQUFLLEVBQUVIO0FBQWpCLFVBREYsSUFJQyxpQkFBaUJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUE3QixJQUNDLGdDQUFDLGlCQUFEO0FBQU8sVUFBQSxLQUFLLEVBQUM7QUFBYixVQVJOLENBREY7QUFjRDs7QUFDRCxhQUFPLEtBQUtOLEtBQUwsQ0FBV08sUUFBbEI7QUFDRDs7OzZDQTVCK0JKLEssRUFBTztBQUNyQztBQUNBLGFBQU87QUFDTEQsUUFBQUEsUUFBUSxFQUFFLElBREw7QUFFTEMsUUFBQUEsS0FBSyxFQUFFQTtBQUZGLE9BQVA7QUFJRDs7OztFQWZ3Q0ssa0JBQU1DLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IERldkVycm9yIGZyb20gXCIuL0RldkVycm9yXCI7XG5pbXBvcnQgRXJyb3IgZnJvbSAnLi9FcnJvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yQm91bmRhcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaGFzRXJyb3I6IGZhbHNlLFxuICAgICAgZXJyb3I6IHt9LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKGVycm9yKSB7XG4gICAgLy8gVXBkYXRlIHN0YXRlIHNvIHRoZSBuZXh0IHJlbmRlciB3aWxsIHNob3cgdGhlIGZhbGxiYWNrIFVJLlxuICAgIHJldHVybiB7XG4gICAgICBoYXNFcnJvcjogdHJ1ZSxcbiAgICAgIGVycm9yOiBlcnJvcixcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmhhc0Vycm9yKSB7XG4gICAgICBjb25zdCB7ZXJyb3J9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIC8vIFlvdSBjYW4gcmVuZGVyIGFueSBjdXN0b20gZmFsbGJhY2sgVUlcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGgxPlNvbWV0aGluZyB3ZW50IHdyb25nLjwvaDE+XG4gICAgICAgICAge1xuICAgICAgICAgICAgKCdkZXZlbG9wbWVudCcgPT09IHByb2Nlc3MuZW52Lk5PREVfRU5WICYmIChcbiAgICAgICAgICAgICAgPERldkVycm9yIGVycm9yPXtlcnJvcn0vPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIHx8XG4gICAgICAgICAgICAoJ3Byb2R1Y3Rpb24nID09PSBwcm9jZXNzLmVudi5OT0RFX0VOViAmJiAoXG4gICAgICAgICAgICAgIDxFcnJvciBlcnJvcj1cImVycm9yOiBjYWxsIHRlY2guIHN1cHBvcHJ0XCIvPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvPlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gIH1cbn1cbiJdfQ==