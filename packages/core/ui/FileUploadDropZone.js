"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDropzone = require("react-dropzone");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};
var thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};
var thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};
var img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};
var baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};
var activeStyle = {
  borderColor: '#2196f3'
};
var acceptStyle = {
  borderColor: '#00e676'
};
var rejectStyle = {
  borderColor: '#ff1744'
};

var _default = function _default(props) {
  var fileChanged = props.fileChanged,
      file = props.file;

  var _ref = file || {},
      filename = _ref.filename;

  var initFiles = file && filename ? [file] : [];

  var _useState = (0, _react.useState)(initFiles),
      _useState2 = _slicedToArray(_useState, 2),
      files = _useState2[0],
      setFiles = _useState2[1];

  var _useDropzone = (0, _reactDropzone.useDropzone)({
    accept: 'image/*',
    multiple: false,
    onDrop: function onDrop(acceptedFiles) {
      setFiles(acceptedFiles.map(function (file) {
        return Object.assign(file, {
          preview: URL.createObjectURL(file)
        });
      }));
      fileChanged(acceptedFiles);
    }
  }),
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps,
      isDragActive = _useDropzone.isDragActive,
      isDragAccept = _useDropzone.isDragAccept,
      isDragReject = _useDropzone.isDragReject;

  var style = (0, _react.useMemo)(function () {
    return _objectSpread({}, baseStyle, {}, isDragActive ? activeStyle : {}, {}, isDragAccept ? acceptStyle : {}, {}, isDragReject ? rejectStyle : {});
  }, [isDragActive, isDragReject]);
  var thumbs = files.map(function (file) {
    return _react["default"].createElement("div", {
      style: thumb,
      key: "div".concat(file.filename)
    }, _react["default"].createElement("div", {
      style: thumbInner,
      key: "subdiv ".concat(file.filename)
    }, _react["default"].createElement("img", {
      src: file.url || file.preview,
      style: img
    })));
  });
  (0, _react.useEffect)(function () {
    return function () {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(function (file) {
        return URL.revokeObjectURL(file.preview);
      });
    };
  }, [files]);
  return _react["default"].createElement("section", {
    className: "container"
  }, _react["default"].createElement("div", getRootProps({
    style: style
  }), _react["default"].createElement("input", getInputProps()), _react["default"].createElement("p", null, "Glissez votre fichier dans cet encadr\xE9 ou cliquez \xE0 l'int\xE9rieur pour t\xE9l\xE9verser votre logo")), _react["default"].createElement("aside", {
    style: thumbsContainer
  }, thumbs));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91aS9GaWxlVXBsb2FkRHJvcFpvbmUudHN4Il0sIm5hbWVzIjpbInRodW1ic0NvbnRhaW5lciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiZmxleFdyYXAiLCJtYXJnaW5Ub3AiLCJ0aHVtYiIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblJpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJwYWRkaW5nIiwiYm94U2l6aW5nIiwidGh1bWJJbm5lciIsIm1pbldpZHRoIiwib3ZlcmZsb3ciLCJpbWciLCJiYXNlU3R5bGUiLCJmbGV4IiwiYWxpZ25JdGVtcyIsImJvcmRlcldpZHRoIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJTdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwib3V0bGluZSIsInRyYW5zaXRpb24iLCJhY3RpdmVTdHlsZSIsImFjY2VwdFN0eWxlIiwicmVqZWN0U3R5bGUiLCJwcm9wcyIsImZpbGVDaGFuZ2VkIiwiZmlsZSIsImZpbGVuYW1lIiwiaW5pdEZpbGVzIiwiZmlsZXMiLCJzZXRGaWxlcyIsImFjY2VwdCIsIm11bHRpcGxlIiwib25Ecm9wIiwiYWNjZXB0ZWRGaWxlcyIsIm1hcCIsIk9iamVjdCIsImFzc2lnbiIsInByZXZpZXciLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJnZXRSb290UHJvcHMiLCJnZXRJbnB1dFByb3BzIiwiaXNEcmFnQWN0aXZlIiwiaXNEcmFnQWNjZXB0IiwiaXNEcmFnUmVqZWN0Iiwic3R5bGUiLCJ0aHVtYnMiLCJ1cmwiLCJmb3JFYWNoIiwicmV2b2tlT2JqZWN0VVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxlQUFlLEdBQUc7QUFDdEJDLEVBQUFBLE9BQU8sRUFBRSxNQURhO0FBRXRCQyxFQUFBQSxhQUFhLEVBQUUsS0FGTztBQUd0QkMsRUFBQUEsUUFBUSxFQUFFLE1BSFk7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RUssSUFBQUEsS0FBSyxFQUFMQTtBQUFGLEdBQUQsQ0FBckIsRUFDRSx5Q0FBV0osYUFBYSxFQUF4QixDQURGLEVBRUUsdUpBRkYsQ0FERixFQU1FO0FBQU8sSUFBQSxLQUFLLEVBQUVqRDtBQUFkLEtBQ0dzRCxNQURILENBTkYsQ0FERjtBQVlELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURyb3B6b25lIH0gZnJvbSAncmVhY3QtZHJvcHpvbmUnO1xuXG5jb25zdCB0aHVtYnNDb250YWluZXIgPSB7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gIGZsZXhXcmFwOiAnd3JhcCcsXG4gIG1hcmdpblRvcDogMTZcbn07XG5cbmNvbnN0IHRodW1iID0ge1xuICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICBib3JkZXJSYWRpdXM6IDIsXG4gIGJvcmRlcjogJzFweCBzb2xpZCAjZWFlYWVhJyxcbiAgbWFyZ2luQm90dG9tOiA4LFxuICBtYXJnaW5SaWdodDogOCxcbiAgd2lkdGg6IDEwMCxcbiAgaGVpZ2h0OiAxMDAsXG4gIHBhZGRpbmc6IDQsXG4gIGJveFNpemluZzogJ2JvcmRlci1ib3gnXG59O1xuXG5jb25zdCB0aHVtYklubmVyID0ge1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIG1pbldpZHRoOiAwLFxuICBvdmVyZmxvdzogJ2hpZGRlbidcbn07XG5cbmNvbnN0IGltZyA9IHtcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgd2lkdGg6ICdhdXRvJyxcbiAgaGVpZ2h0OiAnMTAwJSdcbn07XG5cbmNvbnN0IGJhc2VTdHlsZSA9IHtcbiAgZmxleDogMSxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIHBhZGRpbmc6ICcyMHB4JyxcbiAgYm9yZGVyV2lkdGg6IDIsXG4gIGJvcmRlclJhZGl1czogMixcbiAgYm9yZGVyQ29sb3I6ICcjZWVlZWVlJyxcbiAgYm9yZGVyU3R5bGU6ICdkYXNoZWQnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmFmYWZhJyxcbiAgY29sb3I6ICcjYmRiZGJkJyxcbiAgb3V0bGluZTogJ25vbmUnLFxuICB0cmFuc2l0aW9uOiAnYm9yZGVyIC4yNHMgZWFzZS1pbi1vdXQnXG59O1xuXG5jb25zdCBhY3RpdmVTdHlsZSA9IHtcbiAgYm9yZGVyQ29sb3I6ICcjMjE5NmYzJ1xufTtcblxuY29uc3QgYWNjZXB0U3R5bGUgPSB7XG4gIGJvcmRlckNvbG9yOiAnIzAwZTY3Nidcbn07XG5cbmNvbnN0IHJlamVjdFN0eWxlID0ge1xuICBib3JkZXJDb2xvcjogJyNmZjE3NDQnXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGZpbGVDaGFuZ2VkLCBmaWxlIH0gPSBwcm9wcztcbiAgY29uc3QgeyBmaWxlbmFtZSB9ID0gZmlsZSB8fCB7fTtcbiAgY29uc3QgaW5pdEZpbGVzID0gKGZpbGUgJiYgZmlsZW5hbWUpID8gW2ZpbGVdIDogW107XG4gIGNvbnN0IFtmaWxlcywgc2V0RmlsZXNdID0gdXNlU3RhdGUoaW5pdEZpbGVzKTtcbiAgY29uc3QgeyBnZXRSb290UHJvcHMsIGdldElucHV0UHJvcHMsIGlzRHJhZ0FjdGl2ZSwgaXNEcmFnQWNjZXB0LCBpc0RyYWdSZWplY3QgfSA9IHVzZURyb3B6b25lKHtcbiAgICBhY2NlcHQ6ICdpbWFnZS8qJyxcbiAgICBtdWx0aXBsZTogZmFsc2UsXG4gICAgb25Ecm9wOiAoYWNjZXB0ZWRGaWxlcykgPT4ge1xuICAgICAgc2V0RmlsZXMoYWNjZXB0ZWRGaWxlcy5tYXAoKGZpbGUpID0+IE9iamVjdC5hc3NpZ24oZmlsZSwge1xuICAgICAgICBwcmV2aWV3OiBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpLFxuICAgICAgfSkpKTtcbiAgICAgIGZpbGVDaGFuZ2VkKGFjY2VwdGVkRmlsZXMpO1xuICAgIH0sXG4gIH0pO1xuICBjb25zdCBzdHlsZSA9IHVzZU1lbW8oKCkgPT4gKHtcbiAgICAuLi5iYXNlU3R5bGUsXG4gICAgLi4uKGlzRHJhZ0FjdGl2ZSA/IGFjdGl2ZVN0eWxlIDoge30pLFxuICAgIC4uLihpc0RyYWdBY2NlcHQgPyBhY2NlcHRTdHlsZSA6IHt9KSxcbiAgICAuLi4oaXNEcmFnUmVqZWN0ID8gcmVqZWN0U3R5bGUgOiB7fSksXG4gIH0pLCBbXG4gICAgaXNEcmFnQWN0aXZlLFxuICAgIGlzRHJhZ1JlamVjdCxcbiAgXSk7XG5cbiAgY29uc3QgdGh1bWJzID0gZmlsZXMubWFwKChmaWxlKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17dGh1bWJ9IGtleT17YGRpdiR7ZmlsZS5maWxlbmFtZX1gfT5cbiAgICAgIDxkaXYgc3R5bGU9e3RodW1iSW5uZXJ9IGtleT17YHN1YmRpdiAke2ZpbGUuZmlsZW5hbWV9YH0+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e2ZpbGUudXJsIHx8IGZpbGUucHJldmlld31cbiAgICAgICAgICBzdHlsZT17aW1nfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiAoKSA9PiB7XG4gICAgLy8gTWFrZSBzdXJlIHRvIHJldm9rZSB0aGUgZGF0YSB1cmlzIHRvIGF2b2lkIG1lbW9yeSBsZWFrc1xuICAgIGZpbGVzLmZvckVhY2goKGZpbGUpID0+IFVSTC5yZXZva2VPYmplY3RVUkwoZmlsZS5wcmV2aWV3KSk7XG4gIH0sIFtmaWxlc10pO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgey4uLmdldFJvb3RQcm9wcyh7IHN0eWxlIH0pfT5cbiAgICAgICAgPGlucHV0IHsuLi5nZXRJbnB1dFByb3BzKCl9IC8+XG4gICAgICAgIDxwPkdsaXNzZXogdm90cmUgZmljaGllciBkYW5zIGNldCBlbmNhZHLDqSBvdSBjbGlxdWV6IMOgIGwnaW50w6lyaWV1ciBwb3VyIHTDqWzDqXZlcnNlciB2b3RyZVxuICAgICAgICAgIGxvZ288L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxhc2lkZSBzdHlsZT17dGh1bWJzQ29udGFpbmVyfT5cbiAgICAgICAge3RodW1ic31cbiAgICAgIDwvYXNpZGU+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTsiXX0=