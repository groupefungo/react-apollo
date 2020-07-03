import gql from 'graphql-tag';
import {useMutation, useQuery, useLazyQuery, ApolloProvider} from 'react-apollo';
import {
  Route, Switch, Link, Redirect, BrowserRouter as Router, useParams, useLocation, useHistory, useRouteMatch
} from 'react-router-dom';

import useAuth, {ProvideAuth} from '../UseAuth';
import useRouter from '../UseRouter';
import useQueryWrapper from '../UseQueryWrapper';
import useCompleteState from '../UseCompleteState';
import useBack from "../UseBack";
import useProcessing from "../UseProcessing";
import useTranslate from "../UseTranslate";
import capitalize from "../capitalize";

const ext = {
  gql,
  useQuery,
  useLazyQuery,
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
  useRouteMatch,
  useTranslate,
  capitalize
};

export default () => (
  {
    ...ext,
    UseBack: useBack(),
    UseProcessing: useProcessing(),
  }
);
