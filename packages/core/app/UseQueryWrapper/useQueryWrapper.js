"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useQueryWrapper = void 0;

var useQueryWrapper = function useQueryWrapper(useQueryHandle, queryResultName) {
  var _useQueryHandle = useQueryHandle(),
      data = _useQueryHandle.data,
      error = _useQueryHandle.error,
      refetch = _useQueryHandle.refetch;

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