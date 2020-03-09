import useUserGql from './UseUserGql';

export default (userRole) => {
  const { data } = useUserGql().useMeQuery();
  if (!data) return null;
  const { me } = data;
  const { roles } = me;

  return roles.find((r) => r.name === userRole);
};
