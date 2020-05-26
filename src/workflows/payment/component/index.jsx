import React from 'react';
import paymentConfig from '../constants';
import TextField from '../../../components/fields/text';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Payment = () => {
  return (
    <Container>
      <TextField
        label={paymentConfig.TITLE_CC_NAME}
        name={paymentConfig.INPUT_CC_NAME}
        type="text"
      />
      <TextField
        label={paymentConfig.TITLE_CC_NUMBER}
        name={paymentConfig.INPUT_CC_NUMBER}
        type="text"
      />
      <Wrapper>
        <TextField
          label={paymentConfig.TITLE_CC_EXPIRY_MONTH}
          name={paymentConfig.INPUT_CC_EXPIRY_MONTH}
          type="number"
        />
        <TextField
          label={paymentConfig.TITLE_CC_EXPIRY_YEAR}
          name={paymentConfig.INPUT_CC_EXPIRY_YEAR}
          type="number"
        />
        <TextField
          label={paymentConfig.TITLE_CC_CVC}
          name={paymentConfig.INPUT_CC_CVC}
          type="number"
        />
      </Wrapper>
    </Container>
  );
};

export default Payment;
