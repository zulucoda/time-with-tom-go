import React from 'react';
import Booking from './component';
import payload from './payload';
import validate from './validate';
import initialValues from './initial-values';
import isActive from './active';

/**
 * Booking Workflow Factory
 * @param {Object} options
 * @return {Workflow}
 */
const BookingWorkflowFactory = ({ ...options }) => {
  return {
    Component: () => <Booking />,
    payload: (values) => payload(values),
    validate: (values) => validate(values),
    isActive: (values) => isActive(values),
    initialValues,
  };
};

export default BookingWorkflowFactory;
