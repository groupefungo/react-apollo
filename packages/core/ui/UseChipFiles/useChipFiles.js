"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useChipFiles = void 0;

var useChipFiles = function useChipFiles(stateFiles) {
  var setFilesState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  var chipsData = function chipsData() {
    var d = [];
    Array.from(stateFiles).forEach(function (file) {
      d.push({
        label: file.name || file.filename,
        key: file.name || file.id,
        id: file.id
      });
    });
    return d;
  };

  var chipsChanged = function chipsChanged(_ref) {
    var files = _ref.target.files;
    var newFileList = [];
    Array.from(files).forEach(function (file) {
      newFileList.push(file);
    });
    Array.from(stateFiles).forEach(function (file) {
      newFileList.push(file);
    });
    setFilesState(newFileList);
  };

  var chipDeleted = function chipDeleted(chipToDelete) {
    return function () {
      var updatedFileList = stateFiles.filter(function (chip) {
        return chip.name && chip.name !== chipToDelete.key || chip.id !== chipToDelete.id;
      });
      setFilesState(updatedFileList);
    };
  };

  var chipClicked = function chipClicked(data) {
    return function () {
      if (!data.id) {
        return;
      }

      var fileUrl = "".concat(process.env.API_URL).concat(process.env.ATTACHMENT_DOWNLOAD_PATH);
      window.open("".concat(fileUrl, "/").concat(data.id));
    };
  };

  return {
    chipDeleted: chipDeleted,
    chipClicked: chipClicked,
    chipsData: chipsData,
    chipsChanged: chipsChanged
  };
};

exports.useChipFiles = useChipFiles;