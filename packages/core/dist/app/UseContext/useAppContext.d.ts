import React from 'react';
export declare const useAppContext: () => {
    Route: React.ComponentType<import("react-router").RouteComponentProps<{}, import("react-router").StaticContext, {} | null | undefined> | React.FunctionComponent<{}>>;
    gql: (q: TemplateStringsArray, f?: string | undefined) => string;
    useQuery: (q: React.ReactNode) => object;
    useMutation: React.FunctionComponent<{}>;
};
