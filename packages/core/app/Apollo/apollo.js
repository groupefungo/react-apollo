"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apolloClient = _interopRequireDefault(require("apollo-client"));

var _apolloBoost = require("apollo-boost");

var _apolloUploadClient = require("apollo-upload-client");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var csrfToken = function csrfToken() {
  var meta = document.querySelector('meta[name=csrf-token]');
  if (meta) return meta.getAttribute('content');
  return null;
};

var _default = new _apolloClient["default"]({
  link: (0, _apolloUploadClient.createUploadLink)({
    uri: '/graphql',
    fetchOptions: {
      credentials: 'same-origin'
    },
    headers: {
      'X-CSRF-Token': csrfToken()
    }
  }),
  cache: new _apolloBoost.InMemoryCache()
});

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvQXBvbGxvL2Fwb2xsby50c3giXSwibmFtZXMiOlsiY3NyZlRva2VuIiwibWV0YSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsIkFwb2xsb0NsaWVudCIsImxpbmsiLCJ1cmkiLCJmZXRjaE9wdGlvbnMiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEIsTUFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsdUJBQXZCLENBQWI7QUFDQSxNQUFJRixJQUFKLEVBQVUsT0FBT0EsSUFBSSxDQUFDRyxZQUFMLENBQWtCLFNBQWxCLENBQVA7QUFDVixTQUFPLElBQVA7QUFDRCxDQUpEOztlQU1lLElBQUlDLHdCQUFKLENBQWlCO0FBQzlCQyxFQUFBQSxJQUFJLEVBQUUsMENBQWlCO0FBQ3JCQyxJQUFBQSxHQUFHLEVBQUUsVUFEZ0I7QUFFckJDLElBQUFBLFlBQVksRUFBRTtBQUNaQyxNQUFBQSxXQUFXLEVBQUU7QUFERCxLQUZPO0FBS3JCQyxJQUFBQSxPQUFPLEVBQUU7QUFBRSxzQkFBZ0JWLFNBQVM7QUFBM0I7QUFMWSxHQUFqQixDQUR3QjtBQVE5QlcsRUFBQUEsS0FBSyxFQUFFLElBQUlDLDBCQUFKO0FBUnVCLENBQWpCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBvbGxvQ2xpZW50IGZyb20gJ2Fwb2xsby1jbGllbnQnO1xuaW1wb3J0IHsgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ2Fwb2xsby1ib29zdCc7XG5pbXBvcnQgeyBjcmVhdGVVcGxvYWRMaW5rIH0gZnJvbSAnYXBvbGxvLXVwbG9hZC1jbGllbnQnO1xuXG5jb25zdCBjc3JmVG9rZW4gPSAoKSA9PiB7XG4gIGNvbnN0IG1ldGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9Y3NyZi10b2tlbl0nKTtcbiAgaWYgKG1ldGEpIHJldHVybiBtZXRhLmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xuICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBBcG9sbG9DbGllbnQoe1xuICBsaW5rOiBjcmVhdGVVcGxvYWRMaW5rKHtcbiAgICB1cmk6ICcvZ3JhcGhxbCcsXG4gICAgZmV0Y2hPcHRpb25zOiB7XG4gICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICB9LFxuICAgIGhlYWRlcnM6IHsgJ1gtQ1NSRi1Ub2tlbic6IGNzcmZUb2tlbigpIH0sXG4gIH0pLFxuICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcbn0pO1xuIl19