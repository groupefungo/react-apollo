import useUserGql from './UseUserGql';

export default (userRole: string) => {
  const { data } = useUserGql().useMeQuery();
  if (!data) return null;
  const { me } = data;
  const { roles } = me;

  return roles.find((r: ()=>{name: string}) => r.name === userRole);
};
