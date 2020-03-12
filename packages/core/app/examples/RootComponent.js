"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ext = _interopRequireDefault(require("../ext"));

var _react = _interopRequireDefault(require("react"));

var _CardGrid = _interopRequireDefault(require("../../ui/CardGrid/CardGrid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  var _useAppExt = (0, _ext["default"])(),
      Link = _useAppExt.Link;

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_CardGrid["default"], {
    data: [{
      id: 1,
      eventDate: '23423',
      kind: 'Patate',
      description: 'this is a description',
      title: 'title'
    }],
    addLabel: "un \xE9v\xE9nement",
    resourcesPath: "/events",
    dateHandler: function dateHandler(e) {
      return e.eventDate;
    },
    categoryHandler: function categoryHandler(e) {
      return e.kind;
    }
  }), _react["default"].createElement("div", null, _react["default"].createElement(Link, {
    to: "/rc"
  }, "To route component (/rc)")), _react["default"].createElement("div", null, _react["default"].createElement(Link, {
    to: "/form"
  }, "To form component (/form)")));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvZXhhbXBsZXMvUm9vdENvbXBvbmVudC50c3giXSwibmFtZXMiOlsiTGluayIsImlkIiwiZXZlbnREYXRlIiwia2luZCIsImRlc2NyaXB0aW9uIiwidGl0bGUiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7ZUFFZSxvQkFBTTtBQUFBLG1CQUNKLHNCQURJO0FBQUEsTUFDWkEsSUFEWSxjQUNaQSxJQURZOztBQUVuQixTQUNFLGtFQUNFLGdDQUFDLG9CQUFEO0FBQ0UsSUFBQSxJQUFJLEVBQUUsQ0FBQztBQUFDQyxNQUFBQSxFQUFFLEVBQUUsQ0FBTDtBQUFRQyxNQUFBQSxTQUFTLEVBQUUsT0FBbkI7QUFBNEJDLE1BQUFBLElBQUksRUFBRSxRQUFsQztBQUE0Q0MsTUFBQUEsV0FBVyxFQUFFLHVCQUF6RDtBQUFrRkMsTUFBQUEsS0FBSyxFQUFFO0FBQXpGLEtBQUQsQ0FEUjtBQUVFLElBQUEsUUFBUSxFQUFDLG9CQUZYO0FBR0UsSUFBQSxhQUFhLEVBQUMsU0FIaEI7QUFJRSxJQUFBLFdBQVcsRUFBRSxxQkFBQ0MsQ0FBRDtBQUFBLGFBQU9BLENBQUMsQ0FBQ0osU0FBVDtBQUFBLEtBSmY7QUFLRSxJQUFBLGVBQWUsRUFBRSx5QkFBQ0ksQ0FBRDtBQUFBLGFBQU9BLENBQUMsQ0FBQ0gsSUFBVDtBQUFBO0FBTG5CLElBREYsRUFTRSw2Q0FDRSxnQ0FBQyxJQUFEO0FBQU0sSUFBQSxFQUFFLEVBQUM7QUFBVCxnQ0FERixDQVRGLEVBWUUsNkNBQ0UsZ0NBQUMsSUFBRDtBQUFNLElBQUEsRUFBRSxFQUFDO0FBQVQsaUNBREYsQ0FaRixDQURGO0FBa0JELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlQXBwRXh0IGZyb20gXCIuLi9leHRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDYXJkR3JpZCBmcm9tIFwiLi4vLi4vdWkvQ2FyZEdyaWQvQ2FyZEdyaWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCB7TGlua30gPSB1c2VBcHBFeHQoKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENhcmRHcmlkXG4gICAgICAgIGRhdGE9e1t7aWQ6IDEsIGV2ZW50RGF0ZTogJzIzNDIzJywga2luZDogJ1BhdGF0ZScsIGRlc2NyaXB0aW9uOiAndGhpcyBpcyBhIGRlc2NyaXB0aW9uJywgdGl0bGU6ICd0aXRsZSd9XX1cbiAgICAgICAgYWRkTGFiZWw9XCJ1biDDqXbDqW5lbWVudFwiXG4gICAgICAgIHJlc291cmNlc1BhdGg9XCIvZXZlbnRzXCJcbiAgICAgICAgZGF0ZUhhbmRsZXI9eyhlKSA9PiBlLmV2ZW50RGF0ZX1cbiAgICAgICAgY2F0ZWdvcnlIYW5kbGVyPXsoZSkgPT4gZS5raW5kfVxuICAgICAgLz5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPExpbmsgdG89XCIvcmNcIj5UbyByb3V0ZSBjb21wb25lbnQgKC9yYyk8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxMaW5rIHRvPVwiL2Zvcm1cIj5UbyBmb3JtIGNvbXBvbmVudCAoL2Zvcm0pPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59Il19