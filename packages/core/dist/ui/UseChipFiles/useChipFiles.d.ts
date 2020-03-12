export declare const useChipFiles: (stateFiles: any, setFilesState?: null) => {
    chipDeleted: (chipToDelete: any) => () => void;
    chipClicked: (data: any) => () => void;
    chipsData: () => any[];
    chipsChanged: ({ target: { files, }, }: {
        target: {
            files: any;
        };
    }) => void;
};
