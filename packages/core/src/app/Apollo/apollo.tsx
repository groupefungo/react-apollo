import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-boost';
import { createUploadLink } from 'apollo-upload-client';

const csrfToken = () => {
  const meta = document.querySelector('meta[name=csrf-token]');
  if (meta) return meta.getAttribute('content');
  return null;
};

export default new ApolloClient({
  link: createUploadLink({
    uri: '/graphql',
    fetchOptions: {
      credentials: 'same-origin',
    },
    headers: { 'X-CSRF-Token': csrfToken() },
  }),
  cache: new InMemoryCache(),
});
