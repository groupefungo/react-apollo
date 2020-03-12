"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _UseContext = _interopRequireDefault(require("../UseContext"));

var _StyledRadio = _interopRequireDefault(require("../StyledRadio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(props) {
  var filters = props.filters,
      _onClick = props.onClick,
      selectedValue = props.selectedValue;

  var _useUiContext = (0, _UseContext["default"])(),
      FormControlLabel = _useUiContext.FormControlLabel,
      GroupWorkIcon = _useUiContext.GroupWorkIcon;

  return filters.map(function (filter) {
    var id = filter.id,
        title = filter.title,
        name = filter.name,
        logo = filter.logo;
    if (!title && !name) return null;

    var checkedIcon = _react["default"].createElement(GroupWorkIcon, {
      color: "primary",
      fontSize: "inherit"
    });

    var icon = _react["default"].createElement(GroupWorkIcon, {
      fontSize: "inherit",
      color: "disabled"
    });

    var _ref = logo || {},
        url = _ref.url;

    if (url) {
      checkedIcon = _react["default"].createElement("img", {
        src: url,
        height: 50,
        width: 50
      });
      icon = _react["default"].createElement("img", {
        src: url,
        height: 50,
        width: 50,
        style: {
          opacity: '50%'
        }
      });
    }

    return _react["default"].createElement(FormControlLabel, {
      key: id,
      value: id,
      onClick: function onClick() {
        return _onClick(id);
      },
      control: _react["default"].createElement(_StyledRadio["default"], {
        checked: id === selectedValue,
        checkedIcon: checkedIcon,
        icon: icon
      }),
      label: title || name,
      labelPlacement: "bottom"
    });
  });
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91aS9GaWx0ZXJMaXN0L0ZpbHRlckxpc3QudHN4Il0sIm5hbWVzIjpbInByb3BzIiwiZmlsdGVycyIsIm9uQ2xpY2siLCJzZWxlY3RlZFZhbHVlIiwiRm9ybUNvbnRyb2xMYWJlbCIsIkdyb3VwV29ya0ljb24iLCJtYXAiLCJmaWx0ZXIiLCJpZCIsInRpdGxlIiwibmFtZSIsImxvZ28iLCJjaGVja2VkSWNvbiIsImljb24iLCJ1cmwiLCJvcGFjaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7ZUFFZSxrQkFBQ0EsS0FBRCxFQUFXO0FBQUEsTUFDakJDLE9BRGlCLEdBQ2tCRCxLQURsQixDQUNqQkMsT0FEaUI7QUFBQSxNQUNSQyxRQURRLEdBQ2tCRixLQURsQixDQUNSRSxPQURRO0FBQUEsTUFDQ0MsYUFERCxHQUNrQkgsS0FEbEIsQ0FDQ0csYUFERDs7QUFBQSxzQkFFa0IsNkJBRmxCO0FBQUEsTUFFakJDLGdCQUZpQixpQkFFakJBLGdCQUZpQjtBQUFBLE1BRUNDLGFBRkQsaUJBRUNBLGFBRkQ7O0FBSXhCLFNBQ0VKLE9BQU8sQ0FBQ0ssR0FBUixDQUFZLFVBQUNDLE1BQUQsRUFBWTtBQUFBLFFBQ2ZDLEVBRGUsR0FDVUQsTUFEVixDQUNmQyxFQURlO0FBQUEsUUFDWEMsS0FEVyxHQUNVRixNQURWLENBQ1hFLEtBRFc7QUFBQSxRQUNKQyxJQURJLEdBQ1VILE1BRFYsQ0FDSkcsSUFESTtBQUFBLFFBQ0VDLElBREYsR0FDVUosTUFEVixDQUNFSSxJQURGO0FBRXRCLFFBQUksQ0FBQ0YsS0FBRCxJQUFVLENBQUNDLElBQWYsRUFBcUIsT0FBTyxJQUFQOztBQUVyQixRQUFJRSxXQUFXLEdBQUcsZ0NBQUMsYUFBRDtBQUNoQixNQUFBLEtBQUssRUFBQyxTQURVO0FBRWhCLE1BQUEsUUFBUSxFQUFDO0FBRk8sTUFBbEI7O0FBSUEsUUFBSUMsSUFBSSxHQUFHLGdDQUFDLGFBQUQ7QUFBZSxNQUFBLFFBQVEsRUFBQyxTQUF4QjtBQUFrQyxNQUFBLEtBQUssRUFBQztBQUF4QyxNQUFYOztBQVJzQixlQVVSRixJQUFJLElBQUksRUFWQTtBQUFBLFFBVWZHLEdBVmUsUUFVZkEsR0FWZTs7QUFXdEIsUUFBSUEsR0FBSixFQUFTO0FBQ1BGLE1BQUFBLFdBQVcsR0FBRztBQUFLLFFBQUEsR0FBRyxFQUFFRSxHQUFWO0FBQWUsUUFBQSxNQUFNLEVBQUUsRUFBdkI7QUFBMkIsUUFBQSxLQUFLLEVBQUU7QUFBbEMsUUFBZDtBQUNBRCxNQUFBQSxJQUFJLEdBQUc7QUFBSyxRQUFBLEdBQUcsRUFBRUMsR0FBVjtBQUFlLFFBQUEsTUFBTSxFQUFFLEVBQXZCO0FBQTJCLFFBQUEsS0FBSyxFQUFFLEVBQWxDO0FBQXNDLFFBQUEsS0FBSyxFQUFFO0FBQUVDLFVBQUFBLE9BQU8sRUFBRTtBQUFYO0FBQTdDLFFBQVA7QUFDRDs7QUFFRCxXQUNFLGdDQUFDLGdCQUFEO0FBQ0UsTUFBQSxHQUFHLEVBQUVQLEVBRFA7QUFFRSxNQUFBLEtBQUssRUFBRUEsRUFGVDtBQUdFLE1BQUEsT0FBTyxFQUFFO0FBQUEsZUFBTU4sUUFBTyxDQUFDTSxFQUFELENBQWI7QUFBQSxPQUhYO0FBSUUsTUFBQSxPQUFPLEVBQUUsZ0NBQUMsdUJBQUQ7QUFBYSxRQUFBLE9BQU8sRUFBR0EsRUFBRSxLQUFLTCxhQUE5QjtBQUE4QyxRQUFBLFdBQVcsRUFBRVMsV0FBM0Q7QUFBd0UsUUFBQSxJQUFJLEVBQUVDO0FBQTlFLFFBSlg7QUFLRSxNQUFBLEtBQUssRUFBRUosS0FBSyxJQUFJQyxJQUxsQjtBQU1FLE1BQUEsY0FBYyxFQUFDO0FBTmpCLE1BREY7QUFVRCxHQTFCRCxDQURGO0FBNkJELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVVpQ29udGV4dCBmcm9tICcuLi9Vc2VDb250ZXh0JztcbmltcG9ydCBTdHlsZWRSYWRpbyBmcm9tICcuLi9TdHlsZWRSYWRpbyc7XG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4ge1xuICBjb25zdCB7ZmlsdGVycywgb25DbGljaywgc2VsZWN0ZWRWYWx1ZX0gPSBwcm9wcztcbiAgY29uc3Qge0Zvcm1Db250cm9sTGFiZWwsIEdyb3VwV29ya0ljb259ID0gdXNlVWlDb250ZXh0KCk7XG5cbiAgcmV0dXJuIChcbiAgICBmaWx0ZXJzLm1hcCgoZmlsdGVyKSA9PiB7XG4gICAgICBjb25zdCB7aWQsIHRpdGxlLCBuYW1lLCBsb2dvfSA9IGZpbHRlcjtcbiAgICAgIGlmICghdGl0bGUgJiYgIW5hbWUpIHJldHVybiBudWxsO1xuXG4gICAgICBsZXQgY2hlY2tlZEljb24gPSA8R3JvdXBXb3JrSWNvblxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICBmb250U2l6ZT1cImluaGVyaXRcIlxuICAgICAgLz47XG4gICAgICBsZXQgaWNvbiA9IDxHcm91cFdvcmtJY29uIGZvbnRTaXplPVwiaW5oZXJpdFwiIGNvbG9yPVwiZGlzYWJsZWRcIi8+O1xuXG4gICAgICBjb25zdCB7dXJsfSA9IGxvZ28gfHwge307XG4gICAgICBpZiAodXJsKSB7XG4gICAgICAgIGNoZWNrZWRJY29uID0gPGltZyBzcmM9e3VybH0gaGVpZ2h0PXs1MH0gd2lkdGg9ezUwfSAvPjtcbiAgICAgICAgaWNvbiA9IDxpbWcgc3JjPXt1cmx9IGhlaWdodD17NTB9IHdpZHRoPXs1MH0gc3R5bGU9e3sgb3BhY2l0eTogJzUwJScgfX0gLz47XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICB2YWx1ZT17aWR9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGljayhpZCl9XG4gICAgICAgICAgY29udHJvbD17PFN0eWxlZFJhZGlvIGNoZWNrZWQ9eyhpZCA9PT0gc2VsZWN0ZWRWYWx1ZSl9IGNoZWNrZWRJY29uPXtjaGVja2VkSWNvbn0gaWNvbj17aWNvbn0vPn1cbiAgICAgICAgICBsYWJlbD17dGl0bGUgfHwgbmFtZX1cbiAgICAgICAgICBsYWJlbFBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH0pXG4gICk7XG59O1xuIl19