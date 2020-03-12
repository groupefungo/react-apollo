import gql from 'graphql-tag';
import {useMutation, useQuery, ApolloProvider} from '@apollo/react-hooks';
import {
  Route, Switch, Link, Redirect, BrowserRouter as Router, useParams, useLocation, useHistory, useRouteMatch
} from 'react-router-dom';

import useAuth, { ProvideAuth } from '../UseAuth';
import useUserGql from '../UseUserGql';
import useRouter from '../UseRouter';
import useQueryWrapper from '../UseQueryWrapper';
import useCompleteState from '../UseCompleteState';

const ext = {
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
  ApolloProvider,
  useCompleteState,
  useParams,
  useLocation,
  useHistory,
  useRouteMatch
};

export default (): object => ext;