import React from 'react';
import FormLayout from '../../components/layout/form';
import Typography from '@material-ui/core/Typography';
import BookingRequestForm from './formik';

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
