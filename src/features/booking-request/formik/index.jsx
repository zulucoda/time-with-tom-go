import React from 'react';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import ActivityWorkflowFactory from '../../../workflows/activity';
import getInitialValues from '../../../workflows/utils/get-initial-values';
import validateWorkflows from '../../../workflows/utils/validate-workflows';
import buildPayload from '../../../workflows/utils/build-payload';
import UserWorkflowFactory from '../../../workflows/user';
import BookingRequestForm from '../form';
import BookingWorkflowFactory from '../../../workflows/booking';
import PaymentWorkflowFactory from '../../../workflows/payment';
import { post } from '../../../services';
import { API_ENDPOINTS } from '../../../config';

const BookingRequestFormik = () => {
  const history = useHistory();
  const ActivityWorkflow = ActivityWorkflowFactory({});
  const UserWorkflow = UserWorkflowFactory({});
  const BookingWorkflow = BookingWorkflowFactory({});
  const PaymentWorkflow = PaymentWorkflowFactory({});

  const workflows = [
    ActivityWorkflow,
    UserWorkflow,
    BookingWorkflow,
    PaymentWorkflow,
  ];
  const initialValues = getInitialValues(workflows);
  const validate = validateWorkflows(workflows);
  const payload = buildPayload(workflows);

  const handleFormSubmission = async (values) => {
    const finalPayload = await payload(values);
    await post({ path: API_ENDPOINTS.POST_BOOKINGS, payload: finalPayload });
    history.push('/schedule');
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
