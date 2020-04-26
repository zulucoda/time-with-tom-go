import React from 'react';
import { Formik } from 'formik';
import ActivityWorkflowFactory from '../../../workflows/activity';
import getInitialValues from '../../../workflows/utils/get-initial-values';
import validateWorkflows from '../../../workflows/utils/validate-workflows';
import buildPayload from '../../../workflows/utils/build-payload';
import UserWorkflowFactory from '../../../workflows/user';
import BookingRequestForm from '../form';
import BookingWorkflowFactory from '../../../workflows/booking';

const BookingRequestFormik = () => {
  const ActivityWorkflow = ActivityWorkflowFactory({});
  const UserWorkflow = UserWorkflowFactory({});
  const BookingWorkflow = BookingWorkflowFactory({});

  const workflows = [ActivityWorkflow, UserWorkflow, BookingWorkflow];
  const initialValues = getInitialValues(workflows);
  const validate = validateWorkflows(workflows);
  const payload = buildPayload(workflows);

  const handleFormSubmission = async (values) => {
    alert(JSON.stringify(await payload(values), null, 3));
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleFormSubmission}
    >
      <BookingRequestForm workflows={workflows} />
    </Formik>
  );
};

export default BookingRequestFormik;
