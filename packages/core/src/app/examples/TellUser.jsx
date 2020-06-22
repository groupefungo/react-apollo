import React from 'react';
import useUiContext from '../../ui/UseContext';

export default () => {
  const {Button, Container, Grid, SnackBar} = useUiContext();
  const {informSuccess, informError} = SnackBar;

  const onSuccess = () => informSuccess('Hello world!');
  const onError = () => informError('To hell, world!');

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item>
          <Button variant="contained" color="primary" onClick={onSuccess}>Click me to alert success</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary" onClick={onError}>Click me to alert error</Button>
        </Grid>
      </Grid>
    </Container>
  );
}