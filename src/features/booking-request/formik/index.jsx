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
import { fakePost } from '../../../fake-services';

const BookingRequestFormik = () => {
  const history = useHistory();
  const ActivityWorkflow = ActivityWorkflowFactory({});
  const UserWorkflow = UserWorkflowFactory({});
  const BookingWorkflow = BookingWorkflowFactory({});

  const workflows = [ActivityWorkflow, UserWorkflow, BookingWorkflow];
  const initialValues = getInitialValues(workflows);
  const validate = validateWorkflows(workflows);
  const payload = buildPayload(workflows);

  const handleFormSubmission = async (values) => {
    const finalPayload = await payload(values);
    fakePost(finalPayload);
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
