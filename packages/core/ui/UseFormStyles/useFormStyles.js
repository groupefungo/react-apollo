"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFormStyles = void 0;

var _UseContext = _interopRequireDefault(require("../UseContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useFormStyles = function useFormStyles() {
  var _useUiContext = (0, _UseContext["default"])(),
      makeStyles = _useUiContext.makeStyles;

  return makeStyles(function (theme) {
    return {
      formControl: {// margin: theme.spacing(2),
      },
      selectEmpty: {
        marginTop: theme.spacing(2)
      },
      root: {
        flexGrow: 1
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
      },
      formControlMedium: {
        padding: theme.spacing(1)
      }
    };
  });
};

exports.useFormStyles = useFormStyles;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91aS9Vc2VGb3JtU3R5bGVzL3VzZUZvcm1TdHlsZXMudHN4Il0sIm5hbWVzIjpbInVzZUZvcm1TdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJmb3JtQ29udHJvbCIsInNlbGVjdEVtcHR5IiwibWFyZ2luVG9wIiwic3BhY2luZyIsInJvb3QiLCJmbGV4R3JvdyIsInBhcGVyIiwicGFkZGluZyIsInRleHRBbGlnbiIsImNvbG9yIiwicGFsZXR0ZSIsInRleHQiLCJzZWNvbmRhcnkiLCJmb3JtQ29udHJvbE1lZGl1bSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRU8sSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUEsc0JBQ1YsNkJBRFU7QUFBQSxNQUN6QkMsVUFEeUIsaUJBQ3pCQSxVQUR5Qjs7QUFHakMsU0FBT0EsVUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFZO0FBQzVCQyxNQUFBQSxXQUFXLEVBQUUsQ0FDWDtBQURXLE9BRGU7QUFJNUJDLE1BQUFBLFdBQVcsRUFBRTtBQUNYQyxRQUFBQSxTQUFTLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQ7QUFEQSxPQUplO0FBTzVCQyxNQUFBQSxJQUFJLEVBQUU7QUFDSkMsUUFBQUEsUUFBUSxFQUFFO0FBRE4sT0FQc0I7QUFVNUJDLE1BQUFBLEtBQUssRUFBRTtBQUNMQyxRQUFBQSxPQUFPLEVBQUVSLEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQsQ0FESjtBQUVMSyxRQUFBQSxTQUFTLEVBQUUsUUFGTjtBQUdMQyxRQUFBQSxLQUFLLEVBQUVWLEtBQUssQ0FBQ1csT0FBTixDQUFjQyxJQUFkLENBQW1CQztBQUhyQixPQVZxQjtBQWU1QkMsTUFBQUEsaUJBQWlCLEVBQUU7QUFDakJOLFFBQUFBLE9BQU8sRUFBRVIsS0FBSyxDQUFDSSxPQUFOLENBQWMsQ0FBZDtBQURRO0FBZlMsS0FBWjtBQUFBLEdBQUQsQ0FBakI7QUFtQkQsQ0F0Qk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlVWlDb250ZXh0IGZyb20gJy4uL1VzZUNvbnRleHQnO1xuXG5leHBvcnQgY29uc3QgdXNlRm9ybVN0eWxlcyA9ICgpID0+IHtcbiAgY29uc3QgeyBtYWtlU3R5bGVzIH0gPSB1c2VVaUNvbnRleHQoKTtcblxuICByZXR1cm4gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gICAgZm9ybUNvbnRyb2w6IHtcbiAgICAgIC8vIG1hcmdpbjogdGhlbWUuc3BhY2luZygyKSxcbiAgICB9LFxuICAgIHNlbGVjdEVtcHR5OiB7XG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgfSxcbiAgICByb290OiB7XG4gICAgICBmbGV4R3JvdzogMSxcbiAgICB9LFxuICAgIHBhcGVyOiB7XG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxuICAgIH0sXG4gICAgZm9ybUNvbnRyb2xNZWRpdW06IHtcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgfSxcbiAgfSkpO1xufTtcbiJdfQ==