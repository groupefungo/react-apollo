/// <reference types="react" />
/// <reference types="styled-jsx" />
import gql from 'graphql-tag';
import { useMutation, useQuery } from 'react-apollo';
import { ProvideAuth } from '../UseAuth';
declare const _default: () => {
    gql: typeof gql;
    useQuery: typeof useQuery;
    useMutation: typeof useMutation;
    Route: any;
    Switch: any;
    Redirect: any;
    Link: any;
    useAuth: () => null;
    Router: any;
    ProvideAuth: typeof ProvideAuth;
    useUserGql: () => {
        useUserQuery: (id: any) => any;
        useUsersQuery: () => any;
        useMeQuery: () => any;
        useCenterUsersQuery: (id: any) => any;
        useMutateUser: () => any;
        useDestroyUser: () => any;
    };
    useRouter: () => {
        push: any;
        replace: any;
        pathname: any;
        query: any;
        match: any;
        location: any;
        history: any;
    };
    useQueryWrapper: (useQueryHandle: any, queryResultName: any) => {
        error: any;
        resultField?: undefined;
    } | {
        resultField: any;
        error?: undefined;
    };
    ApolloProvider: import("react").FC<import("@apollo/react-common/lib/context/ApolloProvider").ApolloProviderProps<any>>;
    useCompleteState: (initState: any) => {
        state: any;
        setState: import("react").Dispatch<any>;
        stateChanged: (name: any, value: any) => void;
        formInputChanged: ({ target }: {
            target: any;
        }) => void;
        nameWillChangeToValue: (name: any) => (value: any) => void;
        stateErrorsToHash: () => any;
    };
    useParams: any;
    useLocation: any;
    useHistory: any;
    useRouteMatch: any;
};
export default _default;
