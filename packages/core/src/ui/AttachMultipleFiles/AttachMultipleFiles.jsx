import React from 'react';
import useUiContext from '../UseContext';

export default ({ id, className, changed }) => {
  const { AttachFile, Button } = useUiContext();
  return (
    <>
      <input
        style={{ display: 'none' }}
        type="file"
        className={className}
        id={id}
        multiple
        onChange={changed}
      />
      <label htmlFor={id}>
        <Button
          variant="contained"
          size="small"
          disableElevation
          color="primary"
          component="span"
          aria-label="upload a file"
          startIcon={<AttachFile />}
        >
          Ajouter des pièces jointes
        </Button>
      </label>
    </>
  );
};
