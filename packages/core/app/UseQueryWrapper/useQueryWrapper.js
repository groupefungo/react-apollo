"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useQueryWrapper = void 0;

var useQueryWrapper = function useQueryWrapper(useQueryHandle, queryResultName) {
  var _useQueryHandle = useQueryHandle(),
      data = _useQueryHandle.data,
      error = _useQueryHandle.error;

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
    resultField: resultField
  };
};

exports.useQueryWrapper = useQueryWrapper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvVXNlUXVlcnlXcmFwcGVyL3VzZVF1ZXJ5V3JhcHBlci50c3giXSwibmFtZXMiOlsidXNlUXVlcnlXcmFwcGVyIiwidXNlUXVlcnlIYW5kbGUiLCJxdWVyeVJlc3VsdE5hbWUiLCJkYXRhIiwiZXJyb3IiLCJyZXN1bHRGaWVsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsY0FBRCxFQUFpQkMsZUFBakIsRUFBcUM7QUFBQSx3QkFDMUNELGNBQWMsRUFENEI7QUFBQSxNQUMxREUsSUFEMEQsbUJBQzFEQSxJQUQwRDtBQUFBLE1BQ3BEQyxLQURvRCxtQkFDcERBLEtBRG9EOztBQUdsRSxNQUFJQSxLQUFKLEVBQVcsT0FBTztBQUFFQSxJQUFBQSxLQUFLLEVBQUxBO0FBQUYsR0FBUDtBQUNYLE1BQUksQ0FBQ0QsSUFBTCxFQUFXLE9BQU87QUFBRUUsSUFBQUEsV0FBVyxFQUFFO0FBQWYsR0FBUDtBQUp1RCxNQU12Q0EsV0FOdUMsR0FNdkJGLElBTnVCLENBTXpERCxlQU55RDtBQU9sRSxNQUFJLENBQUNHLFdBQUwsRUFBa0IsT0FBTztBQUFFQSxJQUFBQSxXQUFXLEVBQUU7QUFBZixHQUFQO0FBRWxCLFNBQU87QUFBRUEsSUFBQUEsV0FBVyxFQUFYQTtBQUFGLEdBQVA7QUFDRCxDQVZNIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHVzZVF1ZXJ5V3JhcHBlciA9ICh1c2VRdWVyeUhhbmRsZSwgcXVlcnlSZXN1bHROYW1lKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVF1ZXJ5SGFuZGxlKCk7XG5cbiAgaWYgKGVycm9yKSByZXR1cm4geyBlcnJvciB9O1xuICBpZiAoIWRhdGEpIHJldHVybiB7IHJlc3VsdEZpZWxkOiBudWxsIH07XG5cbiAgY29uc3QgeyBbcXVlcnlSZXN1bHROYW1lXTogcmVzdWx0RmllbGQgfSA9IGRhdGE7XG4gIGlmICghcmVzdWx0RmllbGQpIHJldHVybiB7IHJlc3VsdEZpZWxkOiBudWxsIH07XG5cbiAgcmV0dXJuIHsgcmVzdWx0RmllbGQgfTtcbn07XG4iXX0=