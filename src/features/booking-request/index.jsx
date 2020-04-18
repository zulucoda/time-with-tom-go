import React from 'react';
import styled from 'styled-components';
import Activity from '../../workflows/activity/component';
import FormLayout from '../../components/form-layout';
import Typography from '@material-ui/core/Typography';

const BookingRequest = () => {
  return (
    <FormLayout>
      <Typography variant="h3" gutterBottom marked="center" align="center">
        Booking Request
      </Typography>
      <BookingRequestForm />
    </FormLayout>
  );
};

export default BookingRequest;
