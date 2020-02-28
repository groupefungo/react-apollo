import useAppContext from '@groupefungo/react-apollo.core/app/UseContext';

export const useUserGql = () => {
  const appContext = useAppContext();
  const {gql, useQuery, useMutation} = appContext;
  const CATEGORY_FRAGMENT = gql`
  fragment categoryFragment on Category {
    id
    title
    parentId
    isValid
    visibleToCenters
    errors {
      keys
      messages
    }
  }
  `;
  const MUTATE_CATEGORY = gql`
  mutation MutateCategory($attrs: CategoryInput!){
    mutateCategory(attrs: $attrs){
      category {
        ...categoryFragment
      }
    }
  }
  ${CATEGORY_FRAGMENT}
 `;
  const GET_CATEGORY = gql`
  query category($categoryID: ID){
    category(id: $categoryID){
      ...categoryFragment
    }
  }
  ${CATEGORY_FRAGMENT}
`;
  const GET_CATEGORIES = gql`
  query categories($parentOnly: Int){
    categories(parentOnly: $parentOnly) {
      ...categoryFragment
    }
  }
  ${CATEGORY_FRAGMENT}
`;
  const GET_SUBCATEGORIES = gql`
  query subcategoriesByCategory($id: ID!){
    subcategoriesByCategory(id: $id){
      ...categoryFragment
    }
  }
   ${CATEGORY_FRAGMENT}
`;
  const DESTROY_CATEGORY = gql`
  mutation destroyCategory($id: ID!){ 
    destroyCategory(id: $id){ 
        ...categoryFragment
    }
  }
  ${CATEGORY_FRAGMENT}
 `;
  const useCategoryQuery = (id) => useQuery(GET_CATEGORY, {
    fetchPolicy: 'network-only',
    variables: {categoryID: id},
  });
  const useParentCategoriesQuery = () => useQuery(GET_CATEGORIES, {
    fetchPolicy: 'network-only',
    variables: {parentOnly: 1},
  });
  const useCategoriesQuery = () => useQuery(GET_CATEGORIES, {
    fetchPolicy: 'network-only',
  });
  const useSubCategoriesQuery = (id) => useQuery(GET_SUBCATEGORIES, {
    fetchPolicy: 'network-only',
    variables: {id},
  });
  const useMutateCategory = () => useMutation(MUTATE_CATEGORY);
  const useDestroyCategory = () => useMutation(DESTROY_CATEGORY);
  return {
    useSubCategoriesQuery,
    useCategoriesQuery,
    useCategoryQuery,
    useMutateCategory,
    useParentCategoriesQuery,
    useDestroyCategory,
  };
};