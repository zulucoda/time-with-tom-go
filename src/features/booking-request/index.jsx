import React from 'react';
import FormLayout from '../../components/form-layout';
import Typography from '@material-ui/core/Typography';
import BookingRequestForm from './form';

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
