import React, {createContext, ReactNode} from 'react';
import {RouteComponentProps} from "react-router";
import {Query} from 'react-apollo';

type AppContextType = {
    Route: React.ComponentType<RouteComponentProps|React.FunctionComponent>
    gql: (q: TemplateStringsArray, f?: string) => string
    useQuery: (q: Query: {propTypes}) => object
    useMutation: React.FunctionComponent
};

const C = createContext<AppContextType|null>(null);
export default C as React.Context<AppContextType>;