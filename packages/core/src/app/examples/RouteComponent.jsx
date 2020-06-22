import React from "react";
import useUiContext from '../../ui/UseContext';

export default () => {
  const { Container } = useUiContext();

  return (
    <Container>
      <div>in route component</div>
    </Container>
  );
}