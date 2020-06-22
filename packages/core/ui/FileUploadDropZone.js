"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDropzone = require("react-dropzone");

var _UseContext = _interopRequireDefault(require("./UseContext"));

var _useAppContext2 = require("../app/UseContext/useAppContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
  width: 50,
  height: 50,
  padding: 4,
  boxSizing: 'border-box'
};
var thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};
var thumbDelete = {
  position: 'absolute',
  width: 40,
  height: 40,
  backgroundColor: 'rgba(255,255,255,0.5)'
};
var img = {
  display: 'block',
  width: 'auto',
  height: '100%',
  cursor: 'pointer',
  '&::hover': {
    opacity: '50%'
  }
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
  transition: 'all .24s ease-in-out'
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
  var _useAppContext = (0, _useAppContext2.useAppContext)(),
      useTranslate = _useAppContext.useTranslate;

  var _useTranslate = useTranslate(),
      t = _useTranslate.t;

  var _useState = (0, _react.useState)(-1),
      _useState2 = _slicedToArray(_useState, 2),
      deleteButton = _useState2[0],
      setDeleteButton = _useState2[1];

  var fileChanged = props.fileChanged,
      file = props.file,
      multiple = props.multiple,
      _props$placeHolder = props.placeHolder,
      placeHolder = _props$placeHolder === void 0 ? t('deposit_files') : _props$placeHolder;

  var _ref = file || {},
      filename = _ref.filename;

  var initFiles = function initFiles() {
    var previousFiles = [];

    if (multiple) {
      file.map(function (f) {
        return previousFiles.push(f);
      });
      return previousFiles;
    }

    if (file && filename) return [file];
    return [];
  };

  var _useUiContext = (0, _UseContext["default"])(),
      Fade = _useUiContext.Fade,
      IconButton = _useUiContext.IconButton,
      CancelIcon = _useUiContext.CancelIcon,
      Typography = _useUiContext.Typography;

  var _useState3 = (0, _react.useState)(initFiles),
      _useState4 = _slicedToArray(_useState3, 2),
      files = _useState4[0],
      setFiles = _useState4[1];

  var _useDropzone = (0, _reactDropzone.useDropzone)({
    accept: 'image/*',
    multiple: !!multiple,
    onDrop: function onDrop(acceptedFiles) {
      if (multiple) {
        var newFiles = [].concat(_toConsumableArray(files), _toConsumableArray(acceptedFiles.map(function (file) {
          return Object.assign(file, {
            preview: URL.createObjectURL(file)
          });
        })));
        setFiles(newFiles);
      } else {
        setFiles(acceptedFiles.map(function (file) {
          return Object.assign(file, {
            preview: URL.createObjectURL(file)
          });
        }));
      }

      fileChanged(acceptedFiles);
    }
  }),
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps,
      isDragActive = _useDropzone.isDragActive,
      isDragAccept = _useDropzone.isDragAccept,
      isDragReject = _useDropzone.isDragReject;

  var removeFile = function removeFile(file) {
    return function () {
      var updatedFiles = files.filter(function (e) {
        return e !== file;
      });
      setFiles(updatedFiles);
      fileChanged(updatedFiles);
    };
  };

  var style = (0, _react.useMemo)(function () {
    return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, baseStyle), isDragActive ? activeStyle : {}), isDragAccept ? acceptStyle : {}), isDragReject ? rejectStyle : {});
  }, [isDragActive, isDragReject]);
  var thumbs = files.map(function (file, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: thumb,
      key: "div".concat(file).concat(index),
      onMouseEnter: function onMouseEnter() {
        return setDeleteButton(index);
      },
      onMouseLeave: function onMouseLeave() {
        return setDeleteButton(-1);
      },
      onClick: removeFile(file)
    }, /*#__PURE__*/_react["default"].createElement(Fade, {
      "in": deleteButton === index
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: thumbDelete
    }, /*#__PURE__*/_react["default"].createElement(IconButton, {
      onClick: removeFile(file),
      style: {
        left: 20,
        bottom: 20
      }
    }, /*#__PURE__*/_react["default"].createElement(CancelIcon, {
      fontSize: "small",
      color: "primary"
    })))), /*#__PURE__*/_react["default"].createElement("div", {
      style: thumbInner,
      key: "subdiv ".concat(file).concat(index)
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: file.url || file.preview,
      style: img
    })));
  });
  return /*#__PURE__*/_react["default"].createElement("section", {
    className: "container"
  }, thumbs.length > 0 && /*#__PURE__*/_react["default"].createElement(Typography, {
    variant: "caption",
    color: "textSecondary"
  }, t('images')), /*#__PURE__*/_react["default"].createElement("aside", {
    style: thumbsContainer
  }, thumbs), /*#__PURE__*/_react["default"].createElement("div", getRootProps({
    style: style
  }), /*#__PURE__*/_react["default"].createElement("input", getInputProps()), /*#__PURE__*/_react["default"].createElement("p", null, placeHolder, " ")));
};

exports["default"] = _default;