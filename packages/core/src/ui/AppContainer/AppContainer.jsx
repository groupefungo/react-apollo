import React from 'react';
import useUiContext from '../UseContext';

export default (props) => {
  const { Container } = useUiContext();

  return (
    <div className="app-container-wrapper">
      <Container>
        {props.children}
      </Container>
    </div>
  );
};