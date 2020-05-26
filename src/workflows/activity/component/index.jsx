import React from 'react';
import activityConfig from '../constants';
import SelectField from '../../../components/fields/select';
import styled from 'styled-components';
import { useFormikContext } from 'formik';
import { COLOURS } from '../../../config';
import getActivityAmount from '../util';

const Container = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const AmountWrapper = styled.div`
  width: 20%;
  border-bottom: 1px solid ${COLOURS.LIGHT_GRAY};
  text-align: right;
`;

const Amount = styled.div`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  padding: 6px 0 7px;
`;

const AmountTitle = styled.h3`
  padding: 0;
  font-size: 1rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: bold;
  line-height: 1;
  letter-spacing: 0.00938em;
  text-transform: capitalize;
`;

const Activity = () => {
  const { values } = useFormikContext();
  return (
    <Container>
      <SelectField
        label={activityConfig.SELECT_NAME}
        name={activityConfig.SELECT_NAME}
        list={activityConfig.ACTIVITY_LIST}
      />
      <AmountWrapper>
        <AmountTitle>Amount:</AmountTitle>
        <Amount>R {getActivityAmount(values)}</Amount>
      </AmountWrapper>
    </Container>
  );
};

export default Activity;
