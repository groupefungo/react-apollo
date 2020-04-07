import useAppContext from '../UseContext';

export const useUserGql = () => {
  const { gql, useQuery, useMutation } = useAppContext();

  const USER_FRAGMENT = gql`
  fragment UserFragment on User {
    id
    email
    firstName
    lastName
    password
    centerIds
    roleIds
    roles {
      name
    }
    emailNotifications
    isValid
    errors {
      keys
      messages
    }  
  }
`;

  const MUTATE_USER = gql`
  mutation MutateUser($attrs: UserInput!){
    mutateUser(attrs: $attrs){
      user {
        ...UserFragment
      }
    }
  }
  ${USER_FRAGMENT}
`;

  const GET_USER = gql`
  query user($userID: ID){
    user(id: $userID){
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`;

  const GET_USERS = gql`
  query {
    users {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`;

  const ME = gql`
  query me {
    me {
      id
      email
      firstName
      lastName
      centerIds
      roleIds
      roles {
        name
      }
    }
  }
`;

  const GET_CENTER_USERS = gql`
query centerUsers($id: ID!) {
  centerUsers(id: $id) {
    ...UserFragment
  }
}
  ${USER_FRAGMENT}
`;

  const DESTROY_USER = gql`
  mutation destroyUser($id: ID!){ 
    destroyUser(id: $id){ 
        ...UserFragment
    }
  }
  ${USER_FRAGMENT}
 `;

  const useMeQuery = () => useQuery(ME, {
    fetchPolicy: 'network-only',
  });

  const useUserQuery = (id) => useQuery(GET_USER, {
    fetchPolicy: 'network-only',
    variables: { userID: id },
  });

  const useUsersQuery = () => useQuery(GET_USERS, {
    fetchPolicy: 'network-only',
    notifyOnNetworkStatusChange: true,
  });

  const useCenterUsersQuery = (id) => useQuery(GET_CENTER_USERS, {
    fetchPolicy: 'network-only',
    variables: { id },
    notifyOnNetworkStatusChange: true,
  });

  const useDestroyUser = () => useMutation(DESTROY_USER);

  const useMutateUser = () => useMutation(MUTATE_USER);

  return {
    useUserQuery,
    useUsersQuery,
    useMeQuery,
    useCenterUsersQuery,
    useMutateUser,
    useDestroyUser,
  };
};
