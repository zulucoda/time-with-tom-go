import React from 'react';
import TextField from '../../../components/fields/text';
import bookingConfig from '../constants';

const Booking = () => {
  return (
    <div>
      <TextField
        label={bookingConfig.INPUT_DATE}
        name={bookingConfig.INPUT_DATE}
        type="date"
      />
      <TextField
        label={bookingConfig.INPUT_START_TIME}
        name={bookingConfig.INPUT_START_TIME}
        type="time"
      />
      <TextField
        label={bookingConfig.INPUT_END_TIME}
        name={bookingConfig.INPUT_END_TIME}
        type="time"
      />
    </div>
  );
};

export default Booking;
