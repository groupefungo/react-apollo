import {useAppContext} from "./UseContext/useAppContext";

export default (userRole) => {
  const { useAuth } = useAppContext();
  const auth = useAuth();
  const { user } = auth;
  const { roles } = user;

  return roles.find((r) => r.name === userRole);
};
