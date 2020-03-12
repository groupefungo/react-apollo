"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDrawer = void 0;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useDrawer = function useDrawer() {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var toggleDrawer = function toggleDrawer(open) {
    return function (event) {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }

      setState(open);
    };
  };

  return {
    state: state,
    toggleDrawer: toggleDrawer
  };
};

exports.useDrawer = useDrawer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91aS9Vc2VEcmF3ZXIvdXNlRHJhd2VyLnRzeCJdLCJuYW1lcyI6WyJ1c2VEcmF3ZXIiLCJzdGF0ZSIsInNldFN0YXRlIiwidG9nZ2xlRHJhd2VyIiwib3BlbiIsImV2ZW50IiwidHlwZSIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0FBRU8sSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBLGtCQUNILHFCQUFTLEtBQVQsQ0FERztBQUFBO0FBQUEsTUFDdEJDLEtBRHNCO0FBQUEsTUFDZkMsUUFEZTs7QUFHN0IsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsSUFBRDtBQUFBLFdBQVUsVUFBQ0MsS0FBRCxFQUFXO0FBQ3hDLFVBQUlBLEtBQUssQ0FBQ0MsSUFBTixLQUFlLFNBQWYsS0FBNkJELEtBQUssQ0FBQ0UsR0FBTixLQUFjLEtBQWQsSUFBdUJGLEtBQUssQ0FBQ0UsR0FBTixLQUFjLE9BQWxFLENBQUosRUFBZ0Y7QUFDOUU7QUFDRDs7QUFFREwsTUFBQUEsUUFBUSxDQUFDRSxJQUFELENBQVI7QUFDRCxLQU5vQjtBQUFBLEdBQXJCOztBQVFBLFNBQU87QUFDTEgsSUFBQUEsS0FBSyxFQUFMQSxLQURLO0FBRUxFLElBQUFBLFlBQVksRUFBWkE7QUFGSyxHQUFQO0FBSUQsQ0FmTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgdXNlRHJhd2VyID0gKCkgPT4ge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAob3BlbikgPT4gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdrZXlkb3duJyAmJiAoZXZlbnQua2V5ID09PSAnVGFiJyB8fCBldmVudC5rZXkgPT09ICdTaGlmdCcpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0U3RhdGUob3Blbik7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzdGF0ZSxcbiAgICB0b2dnbGVEcmF3ZXIsXG4gIH07XG59O1xuIl19