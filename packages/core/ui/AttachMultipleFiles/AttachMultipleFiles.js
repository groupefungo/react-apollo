"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("../UseContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var id = _ref.id,
      className = _ref.className,
      changed = _ref.changed;

  var _useUiContext = (0, _UseContext["default"])(),
      AttachFile = _useUiContext.AttachFile,
      Button = _useUiContext.Button;

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("input", {
    style: {
      display: 'none'
    },
    type: "file",
    className: className,
    id: id,
    multiple: true,
    onChange: changed
  }), _react["default"].createElement("label", {
    htmlFor: id
  }, _react["default"].createElement(Button, {
    variant: "contained",
    size: "small",
    disableElevation: true,
    color: "primary",
    component: "span",
    "aria-label": "upload a file",
    startIcon: _react["default"].createElement(AttachFile, null)
  }, "Joindre un fichier")));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91aS9BdHRhY2hNdWx0aXBsZUZpbGVzL0F0dGFjaE11bHRpcGxlRmlsZXMudHN4Il0sIm5hbWVzIjpbImlkIiwiY2xhc3NOYW1lIiwiY2hhbmdlZCIsIkF0dGFjaEZpbGUiLCJCdXR0b24iLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7ZUFFZSx3QkFBZ0M7QUFBQSxNQUE3QkEsRUFBNkIsUUFBN0JBLEVBQTZCO0FBQUEsTUFBekJDLFNBQXlCLFFBQXpCQSxTQUF5QjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYzs7QUFBQSxzQkFDZCw2QkFEYztBQUFBLE1BQ3JDQyxVQURxQyxpQkFDckNBLFVBRHFDO0FBQUEsTUFDekJDLE1BRHlCLGlCQUN6QkEsTUFEeUI7O0FBRTdDLFNBQ0Usa0VBQ0U7QUFDRSxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxPQUFPLEVBQUU7QUFBWCxLQURUO0FBRUUsSUFBQSxJQUFJLEVBQUMsTUFGUDtBQUdFLElBQUEsU0FBUyxFQUFFSixTQUhiO0FBSUUsSUFBQSxFQUFFLEVBQUVELEVBSk47QUFLRSxJQUFBLFFBQVEsTUFMVjtBQU1FLElBQUEsUUFBUSxFQUFFRTtBQU5aLElBREYsRUFTRTtBQUFPLElBQUEsT0FBTyxFQUFFRjtBQUFoQixLQUNFLGdDQUFDLE1BQUQ7QUFDRSxJQUFBLE9BQU8sRUFBQyxXQURWO0FBRUUsSUFBQSxJQUFJLEVBQUMsT0FGUDtBQUdFLElBQUEsZ0JBQWdCLE1BSGxCO0FBSUUsSUFBQSxLQUFLLEVBQUMsU0FKUjtBQUtFLElBQUEsU0FBUyxFQUFDLE1BTFo7QUFNRSxrQkFBVyxlQU5iO0FBT0UsSUFBQSxTQUFTLEVBQUUsZ0NBQUMsVUFBRDtBQVBiLDBCQURGLENBVEYsQ0FERjtBQXlCRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VVaUNvbnRleHQgZnJvbSAnLi4vVXNlQ29udGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGlkLCBjbGFzc05hbWUsIGNoYW5nZWQgfSkgPT4ge1xuICBjb25zdCB7IEF0dGFjaEZpbGUsIEJ1dHRvbiB9ID0gdXNlVWlDb250ZXh0KCk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxpbnB1dFxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX1cbiAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgaWQ9e2lkfVxuICAgICAgICBtdWx0aXBsZVxuICAgICAgICBvbkNoYW5nZT17Y2hhbmdlZH1cbiAgICAgIC8+XG4gICAgICA8bGFiZWwgaHRtbEZvcj17aWR9PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICBkaXNhYmxlRWxldmF0aW9uXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwidXBsb2FkIGEgZmlsZVwiXG4gICAgICAgICAgc3RhcnRJY29uPXs8QXR0YWNoRmlsZSAvPn1cbiAgICAgICAgPlxuICAgICAgICAgIEpvaW5kcmUgdW4gZmljaGllclxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvbGFiZWw+XG4gICAgPC8+XG4gICk7XG59O1xuIl19