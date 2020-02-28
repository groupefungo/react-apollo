"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _UseContext = _interopRequireDefault(require("@groupefungo/react-apollo.core/app/UseContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  mutation destroyCategory($id: ID!){ \n    destroyCategory(id: $id){ \n        ...categoryFragment\n    }\n  }\n  ", "\n "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  query subcategoriesByCategory($id: ID!){\n    subcategoriesByCategory(id: $id){\n      ...categoryFragment\n    }\n  }\n   ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  query categories($parentOnly: Int){\n    categories(parentOnly: $parentOnly) {\n      ...categoryFragment\n    }\n  }\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  query category($categoryID: ID){\n    category(id: $categoryID){\n      ...categoryFragment\n    }\n  }\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  mutation MutateCategory($attrs: CategoryInput!){\n    mutateCategory(attrs: $attrs){\n      category {\n        ...categoryFragment\n      }\n    }\n  }\n  ", "\n "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  fragment categoryFragment on Category {\n    id\n    title\n    parentId\n    isValid\n    visibleToCenters\n    errors {\n      keys\n      messages\n    }\n  }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = function _default() {
  var appContext = (0, _UseContext["default"])();
  var gql = appContext.gql,
      useQuery = appContext.useQuery,
      useMutation = appContext.useMutation;
  var CATEGORY_FRAGMENT = gql(_templateObject());
  var MUTATE_CATEGORY = gql(_templateObject2(), CATEGORY_FRAGMENT);
  var GET_CATEGORY = gql(_templateObject3(), CATEGORY_FRAGMENT);
  var GET_CATEGORIES = gql(_templateObject4(), CATEGORY_FRAGMENT);
  var GET_SUBCATEGORIES = gql(_templateObject5(), CATEGORY_FRAGMENT);
  var DESTROY_CATEGORY = gql(_templateObject6(), CATEGORY_FRAGMENT);

  var useCategoryQuery = function useCategoryQuery(id) {
    return useQuery(GET_CATEGORY, {
      fetchPolicy: 'network-only',
      variables: {
        categoryID: id
      }
    });
  };

  var useParentCategoriesQuery = function useParentCategoriesQuery() {
    return useQuery(GET_CATEGORIES, {
      fetchPolicy: 'network-only',
      variables: {
        parentOnly: 1
      }
    });
  };

  var useCategoriesQuery = function useCategoriesQuery() {
    return useQuery(GET_CATEGORIES, {
      fetchPolicy: 'network-only'
    });
  };

  var useSubCategoriesQuery = function useSubCategoriesQuery(id) {
    return useQuery(GET_SUBCATEGORIES, {
      fetchPolicy: 'network-only',
      variables: {
        id: id
      }
    });
  };

  var useMutateCategory = function useMutateCategory() {
    return useMutation(MUTATE_CATEGORY);
  };

  var useDestroyCategory = function useDestroyCategory() {
    return useMutation(DESTROY_CATEGORY);
  };

  return {
    useSubCategoriesQuery: useSubCategoriesQuery,
    useCategoriesQuery: useCategoriesQuery,
    useCategoryQuery: useCategoryQuery,
    useMutateCategory: useMutateCategory,
    useParentCategoriesQuery: useParentCategoriesQuery,
    useDestroyCategory: useDestroyCategory
  };
};

exports["default"] = _default;