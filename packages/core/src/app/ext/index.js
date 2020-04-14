import gql from 'graphql-tag';
import {useMutation, useQuery, ApolloProvider} from 'react-apollo';
import {
  Route, Switch, Link, Redirect, BrowserRouter as Router, useParams, useLocation, useHistory, useRouteMatch
} from 'react-router-dom';

import useAuth, {ProvideAuth} from '../UseAuth';
import useRouter from '../UseRouter';
import useQueryWrapper from '../UseQueryWrapper';
import useCompleteState from '../UseCompleteState';
import useBack from "../UseBack";

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
  useRouter,
  useQueryWrapper,
  ApolloProvider,
  useCompleteState,
  useParams,
  useLocation,
  useHistory,
  useRouteMatch
};

export default () => (
  {
    ...ext,
    UseBack: useBack()
  }
);
