import React from 'react';
export default class ErrorBoundary extends React.Component {
    constructor(props: any);
    static getDerivedStateFromError(error: any): {
        hasError: boolean;
        error: any;
    };
    render(): {} | null | undefined;
}
