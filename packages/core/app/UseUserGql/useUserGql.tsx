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