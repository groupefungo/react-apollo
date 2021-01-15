"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useQueryWrapper = void 0;

var useQueryWrapper = function useQueryWrapper(_ref, queryResultName) {
  var data = _ref.data,
      error = _ref.error,
      refetch = _ref.refetch;
  if (error) return {
    error: error
  };
  if (!data) return {
    resultField: null
  };
  var resultField = data[queryResultName];
  if (!resultField) return {
    resultField: null
  };
  return {
    resultField: resultField,
    refetch: refetch
  };
};

exports.useQueryWrapper = useQueryWrapper;