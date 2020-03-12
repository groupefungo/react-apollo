"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Cancel = _interopRequireDefault(require("@material-ui/icons/Cancel"));

var _UseContext = _interopRequireDefault(require("../UseContext"));

var _UseContext2 = _interopRequireDefault(require("../../app/UseContext"));

var _ChipsArray = _interopRequireDefault(require("../ChipsArray"));

var _UseChipFiles = _interopRequireDefault(require("../UseChipFiles"));

var _CustomCardHeader = _interopRequireDefault(require("../CustomCardHeader"));

var _DeleteWarning = _interopRequireDefault(require("../DeleteWarning"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = function _default(props) {
  var title = props.title,
      description = props.description,
      category = props.category,
      action = props.action,
      actionLabel = props.actionLabel,
      files = props.files,
      date = props.date,
      id = props.id,
      deleteCardFunction = props.deleteCardFunction;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isHovered = _useState2[0],
      setIsHovered = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      openDeleteWarning = _useState4[0],
      setOpenDeleteWarning = _useState4[1];

  var appContext = (0, _UseContext2["default"])();
  var useRouter = appContext.useRouter;
  var router = useRouter();

  var _useChipFiles = (0, _UseChipFiles["default"])(files),
      chipsData = _useChipFiles.chipsData,
      _chipClicked = _useChipFiles.chipClicked;

  var handleClose = function handleClose() {
    return setOpenDeleteWarning(false);
  };

  var handleConfirm = function handleConfirm() {
    deleteCardFunction(id);
    handleClose();
    router.push('/');
  };

  var _useUiContext = (0, _UseContext["default"])(),
      Card = _useUiContext.Card,
      CardHeader = _useUiContext.CardHeader,
      Divider = _useUiContext.Divider,
      Button = _useUiContext.Button,
      CardContent = _useUiContext.CardContent,
      CardActions = _useUiContext.CardActions,
      Typography = _useUiContext.Typography,
      Box = _useUiContext.Box,
      IconButton = _useUiContext.IconButton,
      Fade = _useUiContext.Fade,
      Grid = _useUiContext.Grid;

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(Box, {
    width: "inherit",
    height: "inherit"
  }, _react["default"].createElement(Grid, {
    item: true
  }, _react["default"].createElement(_DeleteWarning["default"], {
    open: openDeleteWarning,
    title: title,
    handleCancel: handleClose,
    handleConfirm: handleConfirm
  }), _react["default"].createElement(Box, {
    position: "relative",
    flexGrow: 1,
    margin: 1
  }, _react["default"].createElement(Card, {
    raised: isHovered,
    onMouseEnter: function onMouseEnter() {
      return setIsHovered(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setIsHovered(false);
    }
  }, date && _react["default"].createElement(Box, {
    top: -10,
    left: -10,
    position: "absolute"
  }, _react["default"].createElement(_CustomCardHeader["default"], {
    createdAt: date
  })), deleteCardFunction && _react["default"].createElement(Fade, {
    "in": isHovered,
    timeout: 300,
    style: {
      transitionDelay: isHovered ? '300ms' : '0ms'
    }
  }, _react["default"].createElement(Box, {
    top: -20,
    right: -20,
    position: "absolute",
    zIndex: 3
  }, _react["default"].createElement(IconButton, {
    onClick: function onClick() {
      return setOpenDeleteWarning(true);
    }
  }, _react["default"].createElement(_Cancel["default"], {
    fontSize: "small",
    color: "primary"
  })))), _react["default"].createElement(CardHeader, {
    title: title,
    titleTypographyProps: {
      variant: 'h5',
      color: 'primary'
    }
  }), _react["default"].createElement(Divider, {
    light: true
  }), _react["default"].createElement(CardContent, null, description && _react["default"].createElement(Box, {
    flexGrow: 1
  }, description), files && files.length > 0 && _react["default"].createElement(Box, null, _react["default"].createElement(_ChipsArray["default"], {
    chipsData: chipsData(),
    chipClicked: function chipClicked(file) {
      return _chipClicked(file);
    },
    size: "small"
  }))), _react["default"].createElement(CardActions, null, category && _react["default"].createElement(Typography, {
    color: "textSecondary",
    variant: "caption"
  }, category), !category && _react["default"].createElement(Typography, {
    color: "textSecondary",
    variant: "caption"
  }), _react["default"].createElement(Button, {
    size: "small",
    color: "primary",
    onClick: action
  }, actionLabel)))))));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91aS9DYXJkQ29udHJvbC9DYXJkQ29udHJvbC50c3giXSwibmFtZXMiOlsicHJvcHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJhY3Rpb24iLCJhY3Rpb25MYWJlbCIsImZpbGVzIiwiZGF0ZSIsImlkIiwiZGVsZXRlQ2FyZEZ1bmN0aW9uIiwiaXNIb3ZlcmVkIiwic2V0SXNIb3ZlcmVkIiwib3BlbkRlbGV0ZVdhcm5pbmciLCJzZXRPcGVuRGVsZXRlV2FybmluZyIsImFwcENvbnRleHQiLCJ1c2VSb3V0ZXIiLCJyb3V0ZXIiLCJjaGlwc0RhdGEiLCJjaGlwQ2xpY2tlZCIsImhhbmRsZUNsb3NlIiwiaGFuZGxlQ29uZmlybSIsInB1c2giLCJDYXJkIiwiQ2FyZEhlYWRlciIsIkRpdmlkZXIiLCJCdXR0b24iLCJDYXJkQ29udGVudCIsIkNhcmRBY3Rpb25zIiwiVHlwb2dyYXBoeSIsIkJveCIsIkljb25CdXR0b24iLCJGYWRlIiwiR3JpZCIsInRyYW5zaXRpb25EZWxheSIsInZhcmlhbnQiLCJjb2xvciIsImxlbmd0aCIsImZpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O2VBRWUsa0JBQUNBLEtBQUQsRUFBVztBQUFBLE1BQ2hCQyxLQURnQixHQUMyRUQsS0FEM0UsQ0FDaEJDLEtBRGdCO0FBQUEsTUFDVEMsV0FEUyxHQUMyRUYsS0FEM0UsQ0FDVEUsV0FEUztBQUFBLE1BQ0lDLFFBREosR0FDMkVILEtBRDNFLENBQ0lHLFFBREo7QUFBQSxNQUNjQyxNQURkLEdBQzJFSixLQUQzRSxDQUNjSSxNQURkO0FBQUEsTUFDc0JDLFdBRHRCLEdBQzJFTCxLQUQzRSxDQUNzQkssV0FEdEI7QUFBQSxNQUNtQ0MsS0FEbkMsR0FDMkVOLEtBRDNFLENBQ21DTSxLQURuQztBQUFBLE1BQzBDQyxJQUQxQyxHQUMyRVAsS0FEM0UsQ0FDMENPLElBRDFDO0FBQUEsTUFDZ0RDLEVBRGhELEdBQzJFUixLQUQzRSxDQUNnRFEsRUFEaEQ7QUFBQSxNQUNvREMsa0JBRHBELEdBQzJFVCxLQUQzRSxDQUNvRFMsa0JBRHBEOztBQUFBLGtCQUVVLHFCQUFTLEtBQVQsQ0FGVjtBQUFBO0FBQUEsTUFFakJDLFNBRmlCO0FBQUEsTUFFTkMsWUFGTTs7QUFBQSxtQkFHMEIscUJBQVMsS0FBVCxDQUgxQjtBQUFBO0FBQUEsTUFHakJDLGlCQUhpQjtBQUFBLE1BR0VDLG9CQUhGOztBQUl4QixNQUFNQyxVQUFVLEdBQUcsOEJBQW5CO0FBSndCLE1BS2hCQyxTQUxnQixHQUtGRCxVQUxFLENBS2hCQyxTQUxnQjtBQU14QixNQUFNQyxNQUFNLEdBQUdELFNBQVMsRUFBeEI7O0FBTndCLHNCQVFXLDhCQUFhVCxLQUFiLENBUlg7QUFBQSxNQVFoQlcsU0FSZ0IsaUJBUWhCQSxTQVJnQjtBQUFBLE1BUUxDLFlBUkssaUJBUUxBLFdBUks7O0FBVXhCLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsV0FBTU4sb0JBQW9CLENBQUMsS0FBRCxDQUExQjtBQUFBLEdBQXBCOztBQUVBLE1BQU1PLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQlgsSUFBQUEsa0JBQWtCLENBQUNELEVBQUQsQ0FBbEI7QUFDQVcsSUFBQUEsV0FBVztBQUNYSCxJQUFBQSxNQUFNLENBQUNLLElBQVAsQ0FBWSxHQUFaO0FBQ0QsR0FKRDs7QUFad0Isc0JBOEJwQiw2QkE5Qm9CO0FBQUEsTUFtQnRCQyxJQW5Cc0IsaUJBbUJ0QkEsSUFuQnNCO0FBQUEsTUFvQnRCQyxVQXBCc0IsaUJBb0J0QkEsVUFwQnNCO0FBQUEsTUFxQnRCQyxPQXJCc0IsaUJBcUJ0QkEsT0FyQnNCO0FBQUEsTUFzQnRCQyxNQXRCc0IsaUJBc0J0QkEsTUF0QnNCO0FBQUEsTUF1QnRCQyxXQXZCc0IsaUJBdUJ0QkEsV0F2QnNCO0FBQUEsTUF3QnRCQyxXQXhCc0IsaUJBd0J0QkEsV0F4QnNCO0FBQUEsTUF5QnRCQyxVQXpCc0IsaUJBeUJ0QkEsVUF6QnNCO0FBQUEsTUEwQnRCQyxHQTFCc0IsaUJBMEJ0QkEsR0ExQnNCO0FBQUEsTUEyQnRCQyxVQTNCc0IsaUJBMkJ0QkEsVUEzQnNCO0FBQUEsTUE0QnRCQyxJQTVCc0IsaUJBNEJ0QkEsSUE1QnNCO0FBQUEsTUE2QnRCQyxJQTdCc0IsaUJBNkJ0QkEsSUE3QnNCOztBQWdDeEIsU0FDRSxrRUFDRSxnQ0FBQyxHQUFEO0FBQUssSUFBQSxLQUFLLEVBQUMsU0FBWDtBQUFxQixJQUFBLE1BQU0sRUFBQztBQUE1QixLQUNFLGdDQUFDLElBQUQ7QUFBTSxJQUFBLElBQUk7QUFBVixLQUNFLGdDQUFDLHlCQUFEO0FBQ0UsSUFBQSxJQUFJLEVBQUVwQixpQkFEUjtBQUVFLElBQUEsS0FBSyxFQUFFWCxLQUZUO0FBR0UsSUFBQSxZQUFZLEVBQUVrQixXQUhoQjtBQUlFLElBQUEsYUFBYSxFQUFFQztBQUpqQixJQURGLEVBT0UsZ0NBQUMsR0FBRDtBQUFLLElBQUEsUUFBUSxFQUFDLFVBQWQ7QUFBeUIsSUFBQSxRQUFRLEVBQUUsQ0FBbkM7QUFBc0MsSUFBQSxNQUFNLEVBQUU7QUFBOUMsS0FDRSxnQ0FBQyxJQUFEO0FBQ0UsSUFBQSxNQUFNLEVBQUVWLFNBRFY7QUFFRSxJQUFBLFlBQVksRUFBRTtBQUFBLGFBQU1DLFlBQVksQ0FBQyxJQUFELENBQWxCO0FBQUEsS0FGaEI7QUFHRSxJQUFBLFlBQVksRUFBRTtBQUFBLGFBQU1BLFlBQVksQ0FBQyxLQUFELENBQWxCO0FBQUE7QUFIaEIsS0FLSUosSUFBRCxJQUNDLGdDQUFDLEdBQUQ7QUFBSyxJQUFBLEdBQUcsRUFBRSxDQUFDLEVBQVg7QUFBZSxJQUFBLElBQUksRUFBRSxDQUFDLEVBQXRCO0FBQTBCLElBQUEsUUFBUSxFQUFDO0FBQW5DLEtBQ0UsZ0NBQUMsNEJBQUQ7QUFBa0IsSUFBQSxTQUFTLEVBQUVBO0FBQTdCLElBREYsQ0FOSixFQVVJRSxrQkFBRCxJQUNDLGdDQUFDLElBQUQ7QUFDRSxVQUFJQyxTQUROO0FBRUUsSUFBQSxPQUFPLEVBQUUsR0FGWDtBQUdFLElBQUEsS0FBSyxFQUFFO0FBQUV1QixNQUFBQSxlQUFlLEVBQUV2QixTQUFTLEdBQUcsT0FBSCxHQUFhO0FBQXpDO0FBSFQsS0FLRSxnQ0FBQyxHQUFEO0FBQUssSUFBQSxHQUFHLEVBQUUsQ0FBQyxFQUFYO0FBQWUsSUFBQSxLQUFLLEVBQUUsQ0FBQyxFQUF2QjtBQUEyQixJQUFBLFFBQVEsRUFBQyxVQUFwQztBQUErQyxJQUFBLE1BQU0sRUFBRTtBQUF2RCxLQUNFLGdDQUFDLFVBQUQ7QUFBWSxJQUFBLE9BQU8sRUFBRTtBQUFBLGFBQU1HLG9CQUFvQixDQUFDLElBQUQsQ0FBMUI7QUFBQTtBQUFyQixLQUNFLGdDQUFDLGtCQUFEO0FBQVksSUFBQSxRQUFRLEVBQUMsT0FBckI7QUFBNkIsSUFBQSxLQUFLLEVBQUM7QUFBbkMsSUFERixDQURGLENBTEYsQ0FYSixFQXdCRSxnQ0FBQyxVQUFEO0FBQ0UsSUFBQSxLQUFLLEVBQUVaLEtBRFQ7QUFFRSxJQUFBLG9CQUFvQixFQUFFO0FBQ3BCaUMsTUFBQUEsT0FBTyxFQUFFLElBRFc7QUFFcEJDLE1BQUFBLEtBQUssRUFBRTtBQUZhO0FBRnhCLElBeEJGLEVBK0JFLGdDQUFDLE9BQUQ7QUFBUyxJQUFBLEtBQUs7QUFBZCxJQS9CRixFQWdDRSxnQ0FBQyxXQUFELFFBRUlqQyxXQUFXLElBQ1QsZ0NBQUMsR0FBRDtBQUFLLElBQUEsUUFBUSxFQUFFO0FBQWYsS0FDR0EsV0FESCxDQUhOLEVBU0lJLEtBQUssSUFBS0EsS0FBSyxDQUFDOEIsTUFBTixHQUFlLENBQXpCLElBQ0UsZ0NBQUMsR0FBRCxRQUNFLGdDQUFDLHNCQUFEO0FBQ0UsSUFBQSxTQUFTLEVBQUVuQixTQUFTLEVBRHRCO0FBRUUsSUFBQSxXQUFXLEVBQUUscUJBQUNvQixJQUFEO0FBQUEsYUFBVW5CLFlBQVcsQ0FBQ21CLElBQUQsQ0FBckI7QUFBQSxLQUZmO0FBR0UsSUFBQSxJQUFJLEVBQUM7QUFIUCxJQURGLENBVk4sQ0FoQ0YsRUFvREUsZ0NBQUMsV0FBRCxRQUVJbEMsUUFBUSxJQUNOLGdDQUFDLFVBQUQ7QUFBWSxJQUFBLEtBQUssRUFBQyxlQUFsQjtBQUFrQyxJQUFBLE9BQU8sRUFBQztBQUExQyxLQUNHQSxRQURILENBSE4sRUFTSSxDQUFDQSxRQUFELElBQ0UsZ0NBQUMsVUFBRDtBQUFZLElBQUEsS0FBSyxFQUFDLGVBQWxCO0FBQWtDLElBQUEsT0FBTyxFQUFDO0FBQTFDLElBVk4sRUFlRSxnQ0FBQyxNQUFEO0FBQ0UsSUFBQSxJQUFJLEVBQUMsT0FEUDtBQUVFLElBQUEsS0FBSyxFQUFDLFNBRlI7QUFHRSxJQUFBLE9BQU8sRUFBRUM7QUFIWCxLQUtHQyxXQUxILENBZkYsQ0FwREYsQ0FERixDQVBGLENBREYsQ0FERixDQURGO0FBNEZELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2FuY2VsSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2FuY2VsJztcblxuaW1wb3J0IHVzZVVpQ29udGV4dCBmcm9tICcuLi9Vc2VDb250ZXh0JztcbmltcG9ydCB1c2VBcHBDb250ZXh0IGZyb20gJy4uLy4uL2FwcC9Vc2VDb250ZXh0JztcbmltcG9ydCBDaGlwc0FycmF5IGZyb20gJy4uL0NoaXBzQXJyYXknO1xuaW1wb3J0IHVzZUNoaXBGaWxlcyBmcm9tICcuLi9Vc2VDaGlwRmlsZXMnO1xuaW1wb3J0IEN1c3RvbUNhcmRIZWFkZXIgZnJvbSAnLi4vQ3VzdG9tQ2FyZEhlYWRlcic7XG5pbXBvcnQgRGVsZXRlV2FybmluZyBmcm9tICcuLi9EZWxldGVXYXJuaW5nJztcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSwgYWN0aW9uLCBhY3Rpb25MYWJlbCwgZmlsZXMsIGRhdGUsIGlkLCBkZWxldGVDYXJkRnVuY3Rpb24gfSA9IHByb3BzO1xuICBjb25zdCBbaXNIb3ZlcmVkLCBzZXRJc0hvdmVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbb3BlbkRlbGV0ZVdhcm5pbmcsIHNldE9wZW5EZWxldGVXYXJuaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgYXBwQ29udGV4dCA9IHVzZUFwcENvbnRleHQoKTtcbiAgY29uc3QgeyB1c2VSb3V0ZXIgfSA9IGFwcENvbnRleHQ7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHsgY2hpcHNEYXRhLCBjaGlwQ2xpY2tlZCB9ID0gdXNlQ2hpcEZpbGVzKGZpbGVzKTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHNldE9wZW5EZWxldGVXYXJuaW5nKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVDb25maXJtID0gKCkgPT4ge1xuICAgIGRlbGV0ZUNhcmRGdW5jdGlvbihpZCk7XG4gICAgaGFuZGxlQ2xvc2UoKTtcbiAgICByb3V0ZXIucHVzaCgnLycpO1xuICB9O1xuXG4gIGNvbnN0IHtcbiAgICBDYXJkLFxuICAgIENhcmRIZWFkZXIsXG4gICAgRGl2aWRlcixcbiAgICBCdXR0b24sXG4gICAgQ2FyZENvbnRlbnQsXG4gICAgQ2FyZEFjdGlvbnMsXG4gICAgVHlwb2dyYXBoeSxcbiAgICBCb3gsXG4gICAgSWNvbkJ1dHRvbixcbiAgICBGYWRlLFxuICAgIEdyaWQsXG4gIH0gPSB1c2VVaUNvbnRleHQoKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Qm94IHdpZHRoPVwiaW5oZXJpdFwiIGhlaWdodD1cImluaGVyaXRcIj5cbiAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICA8RGVsZXRlV2FybmluZ1xuICAgICAgICAgICAgb3Blbj17b3BlbkRlbGV0ZVdhcm5pbmd9XG4gICAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgICBoYW5kbGVDYW5jZWw9e2hhbmRsZUNsb3NlfVxuICAgICAgICAgICAgaGFuZGxlQ29uZmlybT17aGFuZGxlQ29uZmlybX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCb3ggcG9zaXRpb249XCJyZWxhdGl2ZVwiIGZsZXhHcm93PXsxfSBtYXJnaW49ezF9PlxuICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgcmFpc2VkPXtpc0hvdmVyZWR9XG4gICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SXNIb3ZlcmVkKHRydWUpfVxuICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldElzSG92ZXJlZChmYWxzZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHsoZGF0ZSkgJiYgKFxuICAgICAgICAgICAgICAgIDxCb3ggdG9wPXstMTB9IGxlZnQ9ey0xMH0gcG9zaXRpb249XCJhYnNvbHV0ZVwiPlxuICAgICAgICAgICAgICAgICAgPEN1c3RvbUNhcmRIZWFkZXIgY3JlYXRlZEF0PXtkYXRlfSAvPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7KGRlbGV0ZUNhcmRGdW5jdGlvbikgJiYgKFxuICAgICAgICAgICAgICAgIDxGYWRlXG4gICAgICAgICAgICAgICAgICBpbj17aXNIb3ZlcmVkfVxuICAgICAgICAgICAgICAgICAgdGltZW91dD17MzAwfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNpdGlvbkRlbGF5OiBpc0hvdmVyZWQgPyAnMzAwbXMnIDogJzBtcycgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8Qm94IHRvcD17LTIwfSByaWdodD17LTIwfSBwb3NpdGlvbj1cImFic29sdXRlXCIgekluZGV4PXszfT5cbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gc2V0T3BlbkRlbGV0ZVdhcm5pbmcodHJ1ZSl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxDYW5jZWxJY29uIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cInByaW1hcnlcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgPENhcmRIZWFkZXJcbiAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgdGl0bGVUeXBvZ3JhcGh5UHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6ICdoNScsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxEaXZpZGVyIGxpZ2h0IC8+XG4gICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggZmxleEdyb3c9ezF9PlxuICAgICAgICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGZpbGVzICYmIChmaWxlcy5sZW5ndGggPiAwKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgICAgICAgPENoaXBzQXJyYXlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaXBzRGF0YT17Y2hpcHNEYXRhKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlwQ2xpY2tlZD17KGZpbGUpID0+IGNoaXBDbGlja2VkKGZpbGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgIDxDYXJkQWN0aW9ucz5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBjYXRlZ29yeSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIHZhcmlhbnQ9XCJjYXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICFjYXRlZ29yeSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIHZhcmlhbnQ9XCJjYXB0aW9uXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FjdGlvbn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7YWN0aW9uTGFiZWx9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQm94PlxuICAgIDwvPlxuICApO1xufTtcbiJdfQ==