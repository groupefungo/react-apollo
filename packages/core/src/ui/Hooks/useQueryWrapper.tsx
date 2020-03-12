export const useQueryWrapper = (useQueryHandle, queryResultName) => {
  const { data, error } = useQueryHandle();

  if (error) return { error };
  if (!data) return { resultField: null };

  const { [queryResultName]: resultField } = data;
  if (!resultField) return { resultField: null };

  return { resultField };
};
