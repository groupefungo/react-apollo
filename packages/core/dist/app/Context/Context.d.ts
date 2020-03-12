import React, { ReactNode } from 'react';
import { RouteComponentProps } from "react-router";
declare type AppContextType = {
    Route: React.ComponentType<RouteComponentProps | React.FunctionComponent>;
    gql: (q: TemplateStringsArray, f?: string) => string;
    useQuery: (q: ReactNode) => object;
    useMutation: React.FunctionComponent;
};
declare const _default: React.Context<AppContextType>;
export default _default;
