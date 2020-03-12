"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCompleteState = void 0;

var _react = require("react");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useCompleteState = function useCompleteState(initState) {
  var _useState = (0, _react.useState)(initState),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var stateChanged = function stateChanged(name, value) {
    setState(_objectSpread({}, state, _defineProperty({}, name, value)));
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

  var stateErrorsToHash = function stateErrorsToHash() {
    var errors = state.errors;
    return errors.keys.reduce(function (errs, cur, i) {
      return _objectSpread({}, errs, _defineProperty({}, cur, errors.messages[i]));
    }, {});
  };

  return {
    state: state,
    setState: setState,
    stateChanged: stateChanged,
    formInputChanged: formInputChanged,
    nameWillChangeToValue: nameWillChangeToValue,
    stateErrorsToHash: stateErrorsToHash
  };
};

exports.useCompleteState = useCompleteState;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvVXNlQ29tcGxldGVTdGF0ZS91c2VDb21wbGV0ZVN0YXRlLnRzeCJdLCJuYW1lcyI6WyJ1c2VDb21wbGV0ZVN0YXRlIiwiaW5pdFN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsInN0YXRlQ2hhbmdlZCIsIm5hbWUiLCJ2YWx1ZSIsImZvcm1JbnB1dENoYW5nZWQiLCJ0YXJnZXQiLCJ0eXBlIiwibmFtZVdpbGxDaGFuZ2VUb1ZhbHVlIiwic3RhdGVFcnJvcnNUb0hhc2giLCJlcnJvcnMiLCJrZXlzIiwicmVkdWNlIiwiZXJycyIsImN1ciIsImkiLCJtZXNzYWdlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRU8sSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxTQUFELEVBQWU7QUFBQSxrQkFDbkIscUJBQVNBLFNBQVQsQ0FEbUI7QUFBQTtBQUFBLE1BQ3RDQyxLQURzQztBQUFBLE1BQy9CQyxRQUQrQjs7QUFHN0MsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQ3BDSCxJQUFBQSxRQUFRLG1CQUNIRCxLQURHLHNCQUVMRyxJQUZLLEVBRUVDLEtBRkYsR0FBUjtBQUlELEdBTEQ7O0FBT0EsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixPQUFjO0FBQUEsUUFBWkMsTUFBWSxRQUFaQSxNQUFZO0FBQUEsUUFDN0JILElBRDZCLEdBQ2RHLE1BRGMsQ0FDN0JILElBRDZCO0FBQUEsUUFDdkJJLElBRHVCLEdBQ2RELE1BRGMsQ0FDdkJDLElBRHVCO0FBQUEsUUFFL0JILEtBRitCLEdBRXJCRSxNQUZxQixDQUUvQkYsS0FGK0I7O0FBSXJDLFFBQUlHLElBQUksS0FBSyxVQUFiLEVBQXlCO0FBQ3ZCSCxNQUFBQSxLQUFLLEdBQUcsQ0FBQ0osS0FBSyxDQUFDRyxJQUFELENBQWQ7QUFDRDs7QUFFREQsSUFBQUEsWUFBWSxDQUFDQyxJQUFELEVBQU9DLEtBQVAsQ0FBWjtBQUNELEdBVEQ7O0FBV0EsTUFBTUkscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFDTCxJQUFEO0FBQUEsV0FBVSxVQUFDQyxLQUFEO0FBQUEsYUFBV0MsZ0JBQWdCLENBQUM7QUFBQ0MsUUFBQUEsTUFBTSxFQUFFO0FBQUVILFVBQUFBLElBQUksRUFBSkEsSUFBRjtBQUFRQyxVQUFBQSxLQUFLLEVBQUxBO0FBQVI7QUFBVCxPQUFELENBQTNCO0FBQUEsS0FBVjtBQUFBLEdBQTlCOztBQUVBLE1BQU1LLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUFBLFFBQ3RCQyxNQURzQixHQUNYVixLQURXLENBQ3RCVSxNQURzQjtBQUU5QixXQUFPQSxNQUFNLENBQUNDLElBQVAsQ0FBWUMsTUFBWixDQUFtQixVQUFDQyxJQUFELEVBQU9DLEdBQVAsRUFBWUMsQ0FBWjtBQUFBLCtCQUVuQkYsSUFGbUIsc0JBR3JCQyxHQUhxQixFQUdmSixNQUFNLENBQUNNLFFBQVAsQ0FBZ0JELENBQWhCLENBSGU7QUFBQSxLQUFuQixFQUtKLEVBTEksQ0FBUDtBQU1ELEdBUkQ7O0FBVUEsU0FBTztBQUNMZixJQUFBQSxLQUFLLEVBQUxBLEtBREs7QUFFTEMsSUFBQUEsUUFBUSxFQUFSQSxRQUZLO0FBR0xDLElBQUFBLFlBQVksRUFBWkEsWUFISztBQUlMRyxJQUFBQSxnQkFBZ0IsRUFBaEJBLGdCQUpLO0FBS0xHLElBQUFBLHFCQUFxQixFQUFyQkEscUJBTEs7QUFNTEMsSUFBQUEsaUJBQWlCLEVBQWpCQTtBQU5LLEdBQVA7QUFRRCxDQXpDTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgdXNlQ29tcGxldGVTdGF0ZSA9IChpbml0U3RhdGUpID0+IHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShpbml0U3RhdGUpO1xuXG4gIGNvbnN0IHN0YXRlQ2hhbmdlZCA9IChuYW1lLCB2YWx1ZSkgPT4ge1xuICAgIHNldFN0YXRlKHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBmb3JtSW5wdXRDaGFuZ2VkID0gKHt0YXJnZXR9KSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB0eXBlIH0gPSB0YXJnZXQ7XG4gICAgbGV0IHsgdmFsdWUgfSA9IHRhcmdldDtcblxuICAgIGlmICh0eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICB2YWx1ZSA9ICFzdGF0ZVtuYW1lXTtcbiAgICB9XG5cbiAgICBzdGF0ZUNoYW5nZWQobmFtZSwgdmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IG5hbWVXaWxsQ2hhbmdlVG9WYWx1ZSA9IChuYW1lKSA9PiAodmFsdWUpID0+IGZvcm1JbnB1dENoYW5nZWQoe3RhcmdldDogeyBuYW1lLCB2YWx1ZSB9fSk7XG5cbiAgY29uc3Qgc3RhdGVFcnJvcnNUb0hhc2ggPSAoKSA9PiB7XG4gICAgY29uc3QgeyBlcnJvcnMgfSA9IHN0YXRlO1xuICAgIHJldHVybiBlcnJvcnMua2V5cy5yZWR1Y2UoKGVycnMsIGN1ciwgaSkgPT4gKFxuICAgICAge1xuICAgICAgICAuLi5lcnJzLFxuICAgICAgICBbY3VyXTogZXJyb3JzLm1lc3NhZ2VzW2ldLFxuICAgICAgfVxuICAgICksIHt9KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHN0YXRlLFxuICAgIHNldFN0YXRlLFxuICAgIHN0YXRlQ2hhbmdlZCxcbiAgICBmb3JtSW5wdXRDaGFuZ2VkLFxuICAgIG5hbWVXaWxsQ2hhbmdlVG9WYWx1ZSxcbiAgICBzdGF0ZUVycm9yc1RvSGFzaFxuICB9O1xufTtcbiJdfQ==