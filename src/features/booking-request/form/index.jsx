import React from 'react';
import { Formik } from 'formik';
import ActivityWorkflow from '../../../workflows/activity';

const BookingRequestForm = () => {
  const workflows = [ActivityWorkflow()];
  const initialValues = getInitialValues(workflows);
  const validate = getValidate(workflows);

  const handleFormSubmission = () => {
    const payload = getPayload(workflows);
  };

  return <Formik initialValues={initialValues}></Formik>;
};
