import React from 'react';
import useUiContext from '../../ui/UseContext';

export default () => {
  const {SnackBar} = useUiContext();
  const {informSuccess, informError} = SnackBar;

  const onSuccess = () => informSuccess('Hello world!');
  const onError = () => informError('To hell, world!');

  return (
    <>
      <button onClick={onSuccess}>Click me to alert success</button>
      <button onClick={onError}>Click me to alert error</button>
    </>
  );
}