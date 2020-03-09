"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("../UseContext"));

var _UseContext2 = _interopRequireDefault(require("../../app/UseContext"));

var _CardControl = _interopRequireDefault(require("../CardControl/CardControl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(props) {
  var appContext = (0, _UseContext2["default"])();
  var useRouter = appContext.useRouter;
  var router = useRouter();
  var data = props.data,
      titleHandler = props.titleHandler,
      descriptionHandler = props.descriptionHandler,
      categoryHandler = props.categoryHandler,
      deleteCardFunction = props.deleteCardFunction,
      dateHandler = props.dateHandler,
      rowDisplay = props.rowDisplay;
  var resourcesPath = props.resourcesPath;

  if (!resourcesPath) {
    var match = router.match;
    var url = match.url;
    resourcesPath = url;
  }

  var xs = 12;
  var sm = 6;
  var md = 4;
  var lg = 4;

  if (rowDisplay) {
    xs = sm = md = lg = 12;
  } else {
    xs = sm = md = lg = null;
  }

  var _useUiContext = (0, _UseContext["default"])(),
      Grid = _useUiContext.Grid,
      Box = _useUiContext.Box;

  return _react["default"].createElement(Box, {
    display: "flex",
    flexGrow: 1,
    mt: 4
  }, _react["default"].createElement(Grid, {
    container: true,
    spacing: 1,
    alignItems: "stretch"
  }, data.map(function (d) {
    return _react["default"].createElement(Grid, {
      key: d.id,
      item: true,
      xs: xs,
      sm: sm,
      md: md,
      lg: lg
    }, _react["default"].createElement(_CardControl["default"], {
      key: d.id,
      id: d.id,
      title: titleHandler && titleHandler(d) || d.title,
      description: descriptionHandler && descriptionHandler(d) || d.description,
      category: categoryHandler && categoryHandler(d),
      action: function action() {
        return router.push("".concat(resourcesPath, "/").concat(d.id));
      },
      actionLabel: "D\xE9tail",
      files: d.files,
      date: dateHandler && dateHandler(d) || d.createdAt,
      deleteCardFunction: deleteCardFunction
    }));
  })));
};

exports["default"] = _default;