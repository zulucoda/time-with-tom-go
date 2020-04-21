import React from 'react';
import { Form, Formik, useFormikContext } from 'formik';
import ActivityFactory from '../../../workflows/activity';
import getInitialValues from '../../../workflows/utils/get-initial-values';
import validateWorkflows from '../../../workflows/utils/validate-workflows';
import buildPayload from '../../../workflows/utils/build-payload';

const BookingRequestFormik = ({ ActivityWorkflow }) => {
  const { values, errors } = useFormikContext();

  return (
    <Form>
      <ActivityWorkflow.Component />

      <pre>
        debug value
        {JSON.stringify(values, null, 3)}
      </pre>
      <pre>
        debug errors
        {JSON.stringify(errors, null, 3)}
      </pre>

      <button type="submit"> Submit </button>
    </Form>
  );
};

const BookingRequestForm = () => {
  const ActivityWorkflow = ActivityFactory({});

  const workflows = [ActivityWorkflow];
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
      <BookingRequestFormik ActivityWorkflow={ActivityWorkflow} />
    </Formik>
  );
};

export default BookingRequestForm;
