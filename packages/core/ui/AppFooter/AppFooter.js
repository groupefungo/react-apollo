"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ClickAwayListener = _interopRequireDefault(require("@material-ui/core/ClickAwayListener"));

var _UseContext = _interopRequireDefault(require("../UseContext"));

var _UseContext2 = _interopRequireDefault(require("../../app/UseContext"));

var _FooterNavigationPanel = _interopRequireDefault(require("../FooterNavigationPanel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = function _default() {
  var appContext = (0, _UseContext2["default"])();

  var _useUiContext = (0, _UseContext["default"])(),
      Fade = _useUiContext.Fade,
      IconButton = _useUiContext.IconButton,
      Box = _useUiContext.Box,
      Typography = _useUiContext.Typography,
      Grid = _useUiContext.Grid,
      AppsIcon = _useUiContext.AppsIcon;

  var useAuth = appContext.useAuth;
  var auth = useAuth();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      bottomMenuVisible = _useState2[0],
      setBottomMenuVisible = _useState2[1];

  var handleChange = function handleChange() {
    if (bottomMenuVisible) setBottomMenuVisible(false);else setBottomMenuVisible(true);
  };

  var handleClickAway = function handleClickAway() {
    return setBottomMenuVisible(false);
  };

  var _useUiContext2 = (0, _UseContext["default"])(),
      makeStyles = _useUiContext2.makeStyles;

  var useStyles = makeStyles(function (theme) {
    return {
      root: {
        flexGrow: 1,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingBottom: theme.spacing(1),
        position: 'fixed',
        backgroundColor: theme.palette.primary.main,
        bottom: 0,
        left: 0
      },
      iconsButton: {
        color: theme.palette.primary.contrastText,
        opacity: '50%'
      },
      logo: {
        color: theme.palette.primary.contrastText
      },
      greetings: {
        color: theme.palette.primary.contrastText
      }
    };
  });
  var classes = useStyles();
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(Box, {
    mt: 10
  }), _react["default"].createElement(Fade, {
    style: {
      zIndex: 300
    },
    "in": bottomMenuVisible,
    mountOnEnter: true,
    unmountOnExit: true
  }, _react["default"].createElement(_ClickAwayListener["default"], {
    onClickAway: handleClickAway
  }, _react["default"].createElement(Grid, {
    item: true
  }, _react["default"].createElement(_FooterNavigationPanel["default"], {
    onClose: handleChange
  })))), _react["default"].createElement(Grid, {
    container: true,
    spacing: 3,
    justify: "space-between",
    alignItems: "center",
    className: classes.root
  }, _react["default"].createElement(Grid, {
    item: true
  }, _react["default"].createElement(IconButton, {
    color: "inherit",
    "aria-label": "open drawer",
    edge: "start",
    onClick: function onClick() {
      return handleChange();
    },
    className: classes.iconsButton
  }, _react["default"].createElement(AppsIcon, null))), _react["default"].createElement(Grid, {
    item: true
  }, _react["default"].createElement(Typography, {
    variant: "h5",
    className: classes.logo
  }, "Logo RCAAQ")), auth && auth.user && _react["default"].createElement(Grid, {
    item: true
  }, _react["default"].createElement(Typography, {
    className: classes.greetings
  }, "Bonjour", auth.user.firstName))));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91aS9BcHBGb290ZXIvQXBwRm9vdGVyLnRzeCJdLCJuYW1lcyI6WyJhcHBDb250ZXh0IiwiRmFkZSIsIkljb25CdXR0b24iLCJCb3giLCJUeXBvZ3JhcGh5IiwiR3JpZCIsIkFwcHNJY29uIiwidXNlQXV0aCIsImF1dGgiLCJib3R0b21NZW51VmlzaWJsZSIsInNldEJvdHRvbU1lbnVWaXNpYmxlIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQ2xpY2tBd2F5IiwibWFrZVN0eWxlcyIsInVzZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImZsZXhHcm93IiwicGFkZGluZ0xlZnQiLCJzcGFjaW5nIiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0JvdHRvbSIsInBvc2l0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwiYm90dG9tIiwibGVmdCIsImljb25zQnV0dG9uIiwiY29sb3IiLCJjb250cmFzdFRleHQiLCJvcGFjaXR5IiwibG9nbyIsImdyZWV0aW5ncyIsImNsYXNzZXMiLCJ6SW5kZXgiLCJ1c2VyIiwiZmlyc3ROYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztlQUVlLG9CQUFNO0FBQ25CLE1BQU1BLFVBQVUsR0FBRyw4QkFBbkI7O0FBRG1CLHNCQUUyQyw2QkFGM0M7QUFBQSxNQUVYQyxJQUZXLGlCQUVYQSxJQUZXO0FBQUEsTUFFTEMsVUFGSyxpQkFFTEEsVUFGSztBQUFBLE1BRU9DLEdBRlAsaUJBRU9BLEdBRlA7QUFBQSxNQUVZQyxVQUZaLGlCQUVZQSxVQUZaO0FBQUEsTUFFd0JDLElBRnhCLGlCQUV3QkEsSUFGeEI7QUFBQSxNQUU4QkMsUUFGOUIsaUJBRThCQSxRQUY5Qjs7QUFBQSxNQUlYQyxPQUpXLEdBSUNQLFVBSkQsQ0FJWE8sT0FKVztBQUtuQixNQUFNQyxJQUFJLEdBQUdELE9BQU8sRUFBcEI7O0FBTG1C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THJCLEtBT0UsZ0NBQUMsUUFBRCxPQVBGLENBREYsQ0FQRixFQWtCRSxnQ0FBQyxJQUFEO0FBQU0sSUFBQSxJQUFJO0FBQVYsS0FDRSxnQ0FBQyxVQUFEO0FBQVksSUFBQSxPQUFPLEVBQUMsSUFBcEI7QUFBeUIsSUFBQSxTQUFTLEVBQUVNLE9BQU8sQ0FBQ0Y7QUFBNUMsa0JBREYsQ0FsQkYsRUF3Qkl6QixJQUFJLElBQUlBLElBQUksQ0FBQzZCLElBQWIsSUFDRSxnQ0FBQyxJQUFEO0FBQU0sSUFBQSxJQUFJO0FBQVYsS0FDRSxnQ0FBQyxVQUFEO0FBQVksSUFBQSxTQUFTLEVBQUVGLE9BQU8sQ0FBQ0Q7QUFBL0IsZ0JBR0kxQixJQUFJLENBQUM2QixJQUFMLENBQVVDLFNBSGQsQ0FERixDQXpCTixDQVRGLENBREY7QUFnREQsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDbGlja0F3YXlMaXN0ZW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DbGlja0F3YXlMaXN0ZW5lcic7XG5cbmltcG9ydCB1c2VVaUNvbnRleHQgZnJvbSAnLi4vVXNlQ29udGV4dCc7XG5pbXBvcnQgdXNlQXBwQ29udGV4dCBmcm9tICcuLi8uLi9hcHAvVXNlQ29udGV4dCc7XG5pbXBvcnQgRm9vdGVyTmF2aWdhdGlvblBhbmVsIGZyb20gJy4uL0Zvb3Rlck5hdmlnYXRpb25QYW5lbCc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgYXBwQ29udGV4dCA9IHVzZUFwcENvbnRleHQoKTtcbiAgY29uc3QgeyBGYWRlLCBJY29uQnV0dG9uLCBCb3gsIFR5cG9ncmFwaHksIEdyaWQsIEFwcHNJY29uIH0gPSB1c2VVaUNvbnRleHQoKTtcblxuICBjb25zdCB7IHVzZUF1dGggfSA9IGFwcENvbnRleHQ7XG4gIGNvbnN0IGF1dGggPSB1c2VBdXRoKCk7XG5cbiAgY29uc3QgW2JvdHRvbU1lbnVWaXNpYmxlLCBzZXRCb3R0b21NZW51VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKCkgPT4ge1xuICAgIGlmIChib3R0b21NZW51VmlzaWJsZSkgc2V0Qm90dG9tTWVudVZpc2libGUoZmFsc2UpO1xuICAgIGVsc2Ugc2V0Qm90dG9tTWVudVZpc2libGUodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2tBd2F5ID0gKCkgPT4gKHNldEJvdHRvbU1lbnVWaXNpYmxlKGZhbHNlKSk7XG5cbiAgY29uc3QgeyBtYWtlU3R5bGVzIH0gPSB1c2VVaUNvbnRleHQoKTtcbiAgY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gICAgcm9vdDoge1xuICAgICAgZmxleEdyb3c6IDEsXG4gICAgICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZygyKSxcbiAgICAgIHBhZGRpbmdSaWdodDogdGhlbWUuc3BhY2luZygyKSxcbiAgICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgIH0sXG4gICAgaWNvbnNCdXR0b246IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuY29udHJhc3RUZXh0LFxuICAgICAgb3BhY2l0eTogJzUwJScsXG4gICAgfSxcbiAgICBsb2dvOiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmNvbnRyYXN0VGV4dCxcbiAgICB9LFxuICAgIGdyZWV0aW5nczoge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5jb250cmFzdFRleHQsXG4gICAgfSxcbiAgfSkpO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Qm94IG10PXsxMH0gLz5cbiAgICAgIDxGYWRlIHN0eWxlPXt7IHpJbmRleDogMzAwIH19IGluPXtib3R0b21NZW51VmlzaWJsZX0gbW91bnRPbkVudGVyIHVubW91bnRPbkV4aXQ+XG4gICAgICAgIDxDbGlja0F3YXlMaXN0ZW5lciBvbkNsaWNrQXdheT17aGFuZGxlQ2xpY2tBd2F5fT5cbiAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgPEZvb3Rlck5hdmlnYXRpb25QYW5lbCBvbkNsb3NlPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0NsaWNrQXdheUxpc3RlbmVyPlxuICAgICAgPC9GYWRlPlxuICAgICAgPEdyaWRcbiAgICAgICAgY29udGFpbmVyXG4gICAgICAgIHNwYWNpbmc9ezN9XG4gICAgICAgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fVxuICAgICAgPlxuICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcbiAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDaGFuZ2UoKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29uc0J1dHRvbn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QXBwc0ljb24gLz5cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBjbGFzc05hbWU9e2NsYXNzZXMubG9nb30+XG4gICAgICAgICAgICBMb2dvIFJDQUFRXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIHtcbiAgICAgICAgICBhdXRoICYmIGF1dGgudXNlciAmJiAoXG4gICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZ3JlZXRpbmdzfT5cbiAgICAgICAgICAgICAgICBCb25qb3VyXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXV0aC51c2VyLmZpcnN0TmFtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgPC9HcmlkPlxuICAgIDwvPlxuICApO1xufTtcbiJdfQ==