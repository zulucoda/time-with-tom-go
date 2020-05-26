import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;
const Title = styled.h3`
  padding: 0;
  font-size: 1rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: bold;
  line-height: 1;
  letter-spacing: 0.00938em;
`;

const Free = () => (
  <Container>
    <Title>This activity is free</Title>
  </Container>
);

export default Free;
