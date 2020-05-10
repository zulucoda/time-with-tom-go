import React from 'react';
import userConfig from '../constants';
import TextField from '../../../components/fields/text';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

const User = () => {
  return (
    <Container>
      <TextField
        label={userConfig.INPUT_NAME}
        name={userConfig.INPUT_NAME}
        type="text"
      />
      <TextField
        label={userConfig.INPUT_SURNAME}
        name={userConfig.INPUT_SURNAME}
        type="text"
      />
      <TextField
        label={userConfig.INPUT_EMAIL}
        name={userConfig.INPUT_EMAIL}
        type="email"
      />
    </Container>
  );
};

export default User;
