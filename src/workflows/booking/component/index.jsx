import React from 'react';
import TextField from '../../../components/fields/text';
import bookingConfig from '../constants';
import DateField from '../../../components/fields/date';
import TimeField from '../../../components/fields/time';

const Booking = () => {
  return (
    <div>
      <DateField
        label={bookingConfig.INPUT_DATE}
        name={bookingConfig.INPUT_DATE}
      />
      <TimeField
        label={bookingConfig.INPUT_START_TIME}
        name={bookingConfig.INPUT_START_TIME}
      />
      <TimeField
        label={bookingConfig.INPUT_END_TIME}
        name={bookingConfig.INPUT_END_TIME}
      />
    </div>
  );
};

export default Booking;
