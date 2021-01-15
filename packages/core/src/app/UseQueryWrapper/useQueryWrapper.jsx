export const useQueryWrapper = ({ data, error, refetch }, queryResultName) => {
  if (error) return { error };
  if (!data) return { resultField: null };

  const { [queryResultName]: resultField } = data;
  if (!resultField) return { resultField: null };

  return { resultField, refetch };
};
