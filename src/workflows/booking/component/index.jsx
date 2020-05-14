import React from 'react';
import bookingConfig from '../constants';
import DateField from '../../../components/fields/date';
import TimeField from '../../../components/fields/time';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
`;

const Booking = () => {
  return (
    <Container>
      <TimeField
        label={bookingConfig.INPUT_START_TIME}
        name={bookingConfig.INPUT_START_TIME}
      />
      <TimeField
        label={bookingConfig.INPUT_END_TIME}
        name={bookingConfig.INPUT_END_TIME}
      />
      <DateField
        label={bookingConfig.INPUT_DATE}
        name={bookingConfig.INPUT_DATE}
      />
    </Container>
  );
};

export default Booking;
