"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useUserGql = void 0;

var _UseContext = _interopRequireDefault(require("../UseContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  mutation destroyUser($id: ID!){ \n    destroyUser(id: $id){ \n        ...UserFragment\n    }\n  }\n  ", "\n "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\nquery centerUsers($id: ID!) {\n  centerUsers(id: $id) {\n    ...UserFragment\n  }\n}\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  query me {\n    me {\n      id\n      email\n      firstName\n      lastName\n      roleIds\n      roles {\n        name\n      }\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  query {\n    users {\n      ...UserFragment\n    }\n  }\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  query user($userID: ID){\n    user(id: $userID){\n      ...UserFragment\n    }\n  }\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  mutation MutateUser($attrs: UserInput!){\n    mutateUser(attrs: $attrs){\n      user {\n        ...UserFragment\n      }\n    }\n  }\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  fragment UserFragment on User {\n    id\n    email\n    firstName\n    lastName\n    password\n    centerIds\n    roleIds\n    roles {\n      name\n    }\n    isValid\n    errors {\n      keys\n      messages\n    }  \n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var useUserGql = function useUserGql() {
  var _useAppContext = (0, _UseContext["default"])(),
      gql = _useAppContext.gql,
      useQuery = _useAppContext.useQuery,
      useMutation = _useAppContext.useMutation;

  var USER_FRAGMENT = gql(_templateObject());
  var MUTATE_USER = gql(_templateObject2(), USER_FRAGMENT);
  var GET_USER = gql(_templateObject3(), USER_FRAGMENT);
  var GET_USERS = gql(_templateObject4(), USER_FRAGMENT);
  var ME = gql(_templateObject5());
  var GET_CENTER_USERS = gql(_templateObject6(), USER_FRAGMENT);
  var DESTROY_USER = gql(_templateObject7(), USER_FRAGMENT);

  var useMeQuery = function useMeQuery() {
    return useQuery(ME, {
      fetchPolicy: 'network-only'
    });
  };

  var useUserQuery = function useUserQuery(id) {
    return useQuery(GET_USER, {
      fetchPolicy: 'network-only',
      variables: {
        userID: id
      }
    });
  };

  var useUsersQuery = function useUsersQuery() {
    return useQuery(GET_USERS, {
      fetchPolicy: 'network-only'
    });
  };

  var useCenterUsersQuery = function useCenterUsersQuery(id) {
    return useQuery(GET_CENTER_USERS, {
      fetchPolicy: 'network-only',
      variables: {
        id: id
      }
    });
  };

  var useDestroyUser = function useDestroyUser() {
    return useMutation(DESTROY_USER);
  };

  var useMutateUser = function useMutateUser() {
    return useMutation(MUTATE_USER);
  };

  return {
    useUserQuery: useUserQuery,
    useUsersQuery: useUsersQuery,
    useMeQuery: useMeQuery,
    useCenterUsersQuery: useCenterUsersQuery,
    useMutateUser: useMutateUser,
    useDestroyUser: useDestroyUser
  };
};

exports.useUserGql = useUserGql;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvVXNlVXNlckdxbC91c2VVc2VyR3FsLnRzeCJdLCJuYW1lcyI6WyJ1c2VVc2VyR3FsIiwiZ3FsIiwidXNlUXVlcnkiLCJ1c2VNdXRhdGlvbiIsIlVTRVJfRlJBR01FTlQiLCJNVVRBVEVfVVNFUiIsIkdFVF9VU0VSIiwiR0VUX1VTRVJTIiwiTUUiLCJHRVRfQ0VOVEVSX1VTRVJTIiwiREVTVFJPWV9VU0VSIiwidXNlTWVRdWVyeSIsImZldGNoUG9saWN5IiwidXNlVXNlclF1ZXJ5IiwiaWQiLCJ2YXJpYWJsZXMiLCJ1c2VySUQiLCJ1c2VVc2Vyc1F1ZXJ5IiwidXNlQ2VudGVyVXNlcnNRdWVyeSIsInVzZURlc3Ryb3lVc2VyIiwidXNlTXV0YXRlVXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU8sSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBLHVCQUNTLDZCQURUO0FBQUEsTUFDdEJDLEdBRHNCLGtCQUN0QkEsR0FEc0I7QUFBQSxNQUNqQkMsUUFEaUIsa0JBQ2pCQSxRQURpQjtBQUFBLE1BQ1BDLFdBRE8sa0JBQ1BBLFdBRE87O0FBRzlCLE1BQU1DLGFBQWEsR0FBR0gsR0FBSCxtQkFBbkI7QUFvQkEsTUFBTUksV0FBVyxHQUFHSixHQUFILHFCQVFmRyxhQVJlLENBQWpCO0FBV0EsTUFBTUUsUUFBUSxHQUFHTCxHQUFILHFCQU1aRyxhQU5ZLENBQWQ7QUFTQSxNQUFNRyxTQUFTLEdBQUdOLEdBQUgscUJBTWJHLGFBTmEsQ0FBZjtBQVNBLE1BQU1JLEVBQUUsR0FBR1AsR0FBSCxvQkFBUjtBQWVBLE1BQU1RLGdCQUFnQixHQUFHUixHQUFILHFCQU1wQkcsYUFOb0IsQ0FBdEI7QUFTQSxNQUFNTSxZQUFZLEdBQUdULEdBQUgscUJBTWhCRyxhQU5nQixDQUFsQjs7QUFTQSxNQUFNTyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFdBQU1ULFFBQVEsQ0FBQ00sRUFBRCxFQUFLO0FBQ3BDSSxNQUFBQSxXQUFXLEVBQUU7QUFEdUIsS0FBTCxDQUFkO0FBQUEsR0FBbkI7O0FBSUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsRUFBRDtBQUFBLFdBQVFaLFFBQVEsQ0FBQ0ksUUFBRCxFQUFXO0FBQzlDTSxNQUFBQSxXQUFXLEVBQUUsY0FEaUM7QUFFOUNHLE1BQUFBLFNBQVMsRUFBRTtBQUFFQyxRQUFBQSxNQUFNLEVBQUVGO0FBQVY7QUFGbUMsS0FBWCxDQUFoQjtBQUFBLEdBQXJCOztBQUtBLE1BQU1HLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0I7QUFBQSxXQUFNZixRQUFRLENBQUNLLFNBQUQsRUFBWTtBQUM5Q0ssTUFBQUEsV0FBVyxFQUFFO0FBRGlDLEtBQVosQ0FBZDtBQUFBLEdBQXRCOztBQUlBLE1BQU1NLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0osRUFBRDtBQUFBLFdBQVFaLFFBQVEsQ0FBQ08sZ0JBQUQsRUFBbUI7QUFDN0RHLE1BQUFBLFdBQVcsRUFBRSxjQURnRDtBQUU3REcsTUFBQUEsU0FBUyxFQUFFO0FBQUVELFFBQUFBLEVBQUUsRUFBRkE7QUFBRjtBQUZrRCxLQUFuQixDQUFoQjtBQUFBLEdBQTVCOztBQUtBLE1BQU1LLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUI7QUFBQSxXQUFNaEIsV0FBVyxDQUFDTyxZQUFELENBQWpCO0FBQUEsR0FBdkI7O0FBRUEsTUFBTVUsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQjtBQUFBLFdBQU1qQixXQUFXLENBQUNFLFdBQUQsQ0FBakI7QUFBQSxHQUF0Qjs7QUFFQSxTQUFPO0FBQ0xRLElBQUFBLFlBQVksRUFBWkEsWUFESztBQUVMSSxJQUFBQSxhQUFhLEVBQWJBLGFBRks7QUFHTE4sSUFBQUEsVUFBVSxFQUFWQSxVQUhLO0FBSUxPLElBQUFBLG1CQUFtQixFQUFuQkEsbUJBSks7QUFLTEUsSUFBQUEsYUFBYSxFQUFiQSxhQUxLO0FBTUxELElBQUFBLGNBQWMsRUFBZEE7QUFOSyxHQUFQO0FBUUQsQ0FuSE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlQXBwQ29udGV4dCBmcm9tICcuLi9Vc2VDb250ZXh0JztcblxuZXhwb3J0IGNvbnN0IHVzZVVzZXJHcWwgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZ3FsLCB1c2VRdWVyeSwgdXNlTXV0YXRpb24gfSA9IHVzZUFwcENvbnRleHQoKTtcblxuICBjb25zdCBVU0VSX0ZSQUdNRU5UID0gZ3FsYFxuICBmcmFnbWVudCBVc2VyRnJhZ21lbnQgb24gVXNlciB7XG4gICAgaWRcbiAgICBlbWFpbFxuICAgIGZpcnN0TmFtZVxuICAgIGxhc3ROYW1lXG4gICAgcGFzc3dvcmRcbiAgICBjZW50ZXJJZHNcbiAgICByb2xlSWRzXG4gICAgcm9sZXMge1xuICAgICAgbmFtZVxuICAgIH1cbiAgICBpc1ZhbGlkXG4gICAgZXJyb3JzIHtcbiAgICAgIGtleXNcbiAgICAgIG1lc3NhZ2VzXG4gICAgfSAgXG4gIH1cbmA7XG5cbiAgY29uc3QgTVVUQVRFX1VTRVIgPSBncWxgXG4gIG11dGF0aW9uIE11dGF0ZVVzZXIoJGF0dHJzOiBVc2VySW5wdXQhKXtcbiAgICBtdXRhdGVVc2VyKGF0dHJzOiAkYXR0cnMpe1xuICAgICAgdXNlciB7XG4gICAgICAgIC4uLlVzZXJGcmFnbWVudFxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke1VTRVJfRlJBR01FTlR9XG5gO1xuXG4gIGNvbnN0IEdFVF9VU0VSID0gZ3FsYFxuICBxdWVyeSB1c2VyKCR1c2VySUQ6IElEKXtcbiAgICB1c2VyKGlkOiAkdXNlcklEKXtcbiAgICAgIC4uLlVzZXJGcmFnbWVudFxuICAgIH1cbiAgfVxuICAke1VTRVJfRlJBR01FTlR9XG5gO1xuXG4gIGNvbnN0IEdFVF9VU0VSUyA9IGdxbGBcbiAgcXVlcnkge1xuICAgIHVzZXJzIHtcbiAgICAgIC4uLlVzZXJGcmFnbWVudFxuICAgIH1cbiAgfVxuICAke1VTRVJfRlJBR01FTlR9XG5gO1xuXG4gIGNvbnN0IE1FID0gZ3FsYFxuICBxdWVyeSBtZSB7XG4gICAgbWUge1xuICAgICAgaWRcbiAgICAgIGVtYWlsXG4gICAgICBmaXJzdE5hbWVcbiAgICAgIGxhc3ROYW1lXG4gICAgICByb2xlSWRzXG4gICAgICByb2xlcyB7XG4gICAgICAgIG5hbWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbiAgY29uc3QgR0VUX0NFTlRFUl9VU0VSUyA9IGdxbGBcbnF1ZXJ5IGNlbnRlclVzZXJzKCRpZDogSUQhKSB7XG4gIGNlbnRlclVzZXJzKGlkOiAkaWQpIHtcbiAgICAuLi5Vc2VyRnJhZ21lbnRcbiAgfVxufVxuICAke1VTRVJfRlJBR01FTlR9XG5gO1xuXG4gIGNvbnN0IERFU1RST1lfVVNFUiA9IGdxbGBcbiAgbXV0YXRpb24gZGVzdHJveVVzZXIoJGlkOiBJRCEpeyBcbiAgICBkZXN0cm95VXNlcihpZDogJGlkKXsgXG4gICAgICAgIC4uLlVzZXJGcmFnbWVudFxuICAgIH1cbiAgfVxuICAke1VTRVJfRlJBR01FTlR9XG4gYDtcblxuICBjb25zdCB1c2VNZVF1ZXJ5ID0gKCkgPT4gdXNlUXVlcnkoTUUsIHtcbiAgICBmZXRjaFBvbGljeTogJ25ldHdvcmstb25seScsXG4gIH0pO1xuXG4gIGNvbnN0IHVzZVVzZXJRdWVyeSA9IChpZCkgPT4gdXNlUXVlcnkoR0VUX1VTRVIsIHtcbiAgICBmZXRjaFBvbGljeTogJ25ldHdvcmstb25seScsXG4gICAgdmFyaWFibGVzOiB7IHVzZXJJRDogaWQgfSxcbiAgfSk7XG5cbiAgY29uc3QgdXNlVXNlcnNRdWVyeSA9ICgpID0+IHVzZVF1ZXJ5KEdFVF9VU0VSUywge1xuICAgIGZldGNoUG9saWN5OiAnbmV0d29yay1vbmx5JyxcbiAgfSk7XG5cbiAgY29uc3QgdXNlQ2VudGVyVXNlcnNRdWVyeSA9IChpZCkgPT4gdXNlUXVlcnkoR0VUX0NFTlRFUl9VU0VSUywge1xuICAgIGZldGNoUG9saWN5OiAnbmV0d29yay1vbmx5JyxcbiAgICB2YXJpYWJsZXM6IHsgaWQgfSxcbiAgfSk7XG5cbiAgY29uc3QgdXNlRGVzdHJveVVzZXIgPSAoKSA9PiB1c2VNdXRhdGlvbihERVNUUk9ZX1VTRVIpO1xuXG4gIGNvbnN0IHVzZU11dGF0ZVVzZXIgPSAoKSA9PiB1c2VNdXRhdGlvbihNVVRBVEVfVVNFUik7XG5cbiAgcmV0dXJuIHtcbiAgICB1c2VVc2VyUXVlcnksXG4gICAgdXNlVXNlcnNRdWVyeSxcbiAgICB1c2VNZVF1ZXJ5LFxuICAgIHVzZUNlbnRlclVzZXJzUXVlcnksXG4gICAgdXNlTXV0YXRlVXNlcixcbiAgICB1c2VEZXN0cm95VXNlcixcbiAgfTtcbn07XG4iXX0=