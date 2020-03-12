declare const _default: {
    palette: {
        primary: {
            main: string;
            contrastText: string;
        };
        secondary: {
            main: string;
            contrastText: string;
        };
    };
    text: {
        primary: string;
        secondary: string;
        disabled: string;
        hint: string;
    };
    typography: {
        useNextVariants: boolean;
        body1: {
            fontSize: string;
        };
        display1: {
            fontSize: string;
            fontWeight: number;
            lineHeight: string;
        };
        title: {
            color: string;
            fontSize: string;
            fontWeight: number;
            lineHeight: string;
        };
        h1: {
            color: string;
            fontSize: string;
            fontWeight: number;
            lineHeight: string;
        };
        caption: {
            fontStyle: string;
        };
    };
    overrides: {
        MuiAppBar: {
            colorDefault: {
                backgroundColor: string;
            };
        };
        MuiCard: {
            root: {
                display: string;
                flexDirection: string;
                justifyContent: string;
                padding: number;
                paddingBottom: number;
                width: string;
                minHeight: number;
                borderRadius: number;
            };
        };
        MuiCardContent: {
            root: {
                display: string;
                width: string;
                flexDirection: string;
                wordBreak: string;
                flexGrow: number;
                justifyContent: string;
                padding: number;
                marginTop: number;
            };
        };
        MuiCardHeader: {
            root: {
                paddingTop: number;
                paddingLeft: number;
                paddingBottom: number;
                marginTop: number;
            };
        };
        MuiCardActions: {
            root: {
                justifyContent: string;
                alignItems: string;
                padding: number;
            };
        };
        MuiChip: {
            label: {
                maxWidth: number;
                textOverflow: string;
            };
        };
    };
};
export default _default;
