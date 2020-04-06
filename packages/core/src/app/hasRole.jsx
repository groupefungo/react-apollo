import useAppContext from "./UseContext";

export default (userRole) => {
  const {useAuth} = useAppContext();
  const auth = useAuth();
  const {user} = auth;

  const roles = (user && user.roles) || [];

  return roles.find((r) => r.name === userRole);
};
