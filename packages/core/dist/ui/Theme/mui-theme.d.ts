declare const _default: {
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: string;
            };
            colorSecondary: {
                backgroundColor: string;
            };
        };
        MuiContainer: {
            maxWidthLg: {
                '@media (min-width: 900px)': {
                    maxWidth: string;
                };
            };
        };
        MuiButton: {
            contained: {
                backgroundColor: string;
                color: string;
                '&:hover': {
                    backgroundColor: string;
                };
                '&.cta-add-location': {
                    backgroundColor: string;
                    color: string;
                    height: string;
                    width: string;
                    '&:hover': {
                        backgroundColor: string;
                    };
                    '& $label': {
                        display: string;
                        alignItems: string;
                        '& svg': {
                            marginRight: string;
                        };
                    };
                };
            };
            containedPrimary: {
                '&:hover': {
                    backgroundColor: string;
                };
            };
            outlined: {
                borderColor: string;
                color: string;
            };
        };
        MuiFab: {
            root: {
                color: string;
                backgroundColor: string;
                '&:hover': {
                    backgroundColor: string;
                };
            };
        };
        MuiDialogActions: {
            root: {
                margin: string;
            };
        };
        MuiDialogContent: {
            root: {
                padding: string;
            };
        };
        MuiDialogTitle: {
            root: {
                padding: string;
            };
        };
        MuiFormControl: {
            root: {
                '&.filter-width': {
                    width: string;
                    '@media (min-width: 992px)': {
                        width: string;
                    };
                };
                '&.two-thirds': {
                    width: string;
                };
            };
        };
        MuiFormGroup: {
            root: {
                '&.form-group-disabled': {
                    opacity: string;
                };
            };
        };
        MuiFormHelperText: {
            root: {
                '&$error': {
                    display: string;
                };
            };
        };
        MuiFormLabel: {
            root: {
                '&$focused': {
                    color: string;
                };
            };
        };
        MuiIconButton: {
            root: {
                color: string;
            };
        };
        MuiOutlinedInput: {
            root: {
                '&$focused': {
                    '& $notchedOutline': {
                        borderColor: string;
                    };
                };
            };
            input: {
                padding: string;
            };
        };
        MuiSelect: {
            select: {
                '&:focus': {
                    background: string;
                };
            };
        };
        MuiSvgIcon: {
            root: {
                '&.prepared-icon-color': {
                    color: string;
                };
                '&.menu-icon-color': {
                    color: string;
                };
            };
        };
        MuiTab: {
            root: {
                '&:hover': {
                    backgroundColor: string;
                };
                '&$selected': {
                    color: string;
                };
            };
            textColorPrimary: {
                color: string;
            };
        };
        MuiTabs: {
            indicator: {
                backgroundColor: string;
            };
        };
        MuiTableCell: {
            root: {
                whiteSpace: string;
                padding: string;
                textOverflow: string;
                '&.action-cell': {
                    paddingRight: string;
                    textAlign: string;
                    width: string;
                };
                '&.icon-cell': {
                    padding: number;
                    textAlign: string;
                    width: string;
                };
                '&.province-cell': {
                    paddingRight: string;
                    width: string;
                };
                '&.zipcode-cell': {
                    width: string;
                };
                '&.no-pointer': {
                    cursor: string;
                };
            };
        };
        MuiTablePagination: {
            caption: {
                color: string;
            };
            select: {
                color: string;
                fontSize: string;
            };
            toolbar: {
                padding: string;
            };
        };
        MuiTableRow: {
            root: {
                height: string;
                transition: string;
                '&:nth-child(even)': {
                    backgroundColor: string;
                };
                '&.link-row:hover': {
                    backgroundColor: string;
                    cursor: string;
                };
            };
        };
        MuiTableSortLabel: {
            root: {
                fontWeight: number;
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
    palette: {
        primary: {
            light: string;
            main: string;
            dark: string;
            contrastText: string;
        };
        secondary: {
            light: string;
            main: string;
            dark: string;
            contrastText: string;
        };
        background: {
            default: string;
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
            color: string;
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
};
export default _default;
