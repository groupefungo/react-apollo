export const useChipFiles = (stateFiles, setFilesState = null) => {
  const chipsData = () => {
    const d = [];
    Array.from(stateFiles)
      .forEach(
        (file) => {
          d.push({
            label: file.name || file.filename,
            key: file.name || file.id,
            id: file.id,
          });
        },
      );
    return d;
  };

  const chipsChanged = ({
    target: {
      files,
    },
  }) => {
    const newFileList = [];
    Array.from(files)
      .forEach(
        (file) => {
          newFileList.push(file);
        },
      );
    Array.from(stateFiles)
      .forEach(
        (file) => {
          newFileList.push(file);
        },
      );

    setFilesState(newFileList);
  };

  const chipDeleted = (chipToDelete) => () => {
    const updatedFileList = [];
    Array.from(stateFiles)
      .forEach(
        (file) => {
          if (file.name !== chipToDelete.key && file.id !== chipToDelete.id) {
            updatedFileList.push(file);
          }
        },
      );

    setFilesState(updatedFileList);
  };

  const chipClicked = (data) => () => {
    if (!data.id) {
      return;
    }
    const fileUrl = `${process.env.API_URL}${process.env.ATTACHMENT_DOWNLOAD_PATH}`;
    window.open(`${fileUrl}/${data.id}/${data.label}`);
  };

  return {
    chipDeleted,
    chipClicked,
    chipsData,
    chipsChanged,
  };
};
