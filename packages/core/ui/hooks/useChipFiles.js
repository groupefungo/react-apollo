"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(stateFiles) {
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
      var updatedFileList = [];
      Array.from(stateFiles).forEach(function (file) {
        if (file.name !== chipToDelete.key && file.id !== chipToDelete.id) {
          updatedFileList.push(file);
        }
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
      window.open("".concat(fileUrl, "/").concat(data.id, "/").concat(data.label));
    };
  };

  return {
    chipDeleted: chipDeleted,
    chipClicked: chipClicked,
    chipsData: chipsData,
    chipsChanged: chipsChanged
  };
};

exports["default"] = _default;