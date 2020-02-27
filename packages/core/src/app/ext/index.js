import gql from 'graphql-tag';
import {useMutation, useQuery, ApolloProvider} from 'react-apollo';
import {Route, Switch, Link, Redirect, BrowserRouter as Router} from 'react-router-dom';

import {useAuth, ProvideAuth, useUserGql, useRouter, useQueryWrapper} from '../hooks';

export default {
  gql,
  useQuery,
  useMutation,
  Route,
  Switch,
  Redirect,
  Link,
  useAuth,
  Router,
  ProvideAuth,
  useUserGql,
  useRouter,
  useQueryWrapper,
  ApolloProvider
};