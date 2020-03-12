/// <reference types="react" />
/// <reference types="styled-jsx" />
export declare const useCompleteState: (initState: any) => {
    state: any;
    setState: import("react").Dispatch<any>;
    stateChanged: (name: any, value: any) => void;
    formInputChanged: ({ target }: {
        target: any;
    }) => void;
    nameWillChangeToValue: (name: any) => (value: any) => void;
    stateErrorsToHash: () => any;
};
