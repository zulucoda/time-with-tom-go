import React from 'react';
import { Form, Formik, useFormikContext } from 'formik';
import ActivityWorkflowFactory from '../../../workflows/activity';
import getInitialValues from '../../../workflows/utils/get-initial-values';
import validateWorkflows from '../../../workflows/utils/validate-workflows';
import buildPayload from '../../../workflows/utils/build-payload';
import UserWorkflowFactory from '../../../workflows/user';

const BookingRequestFormik = ({ workflows }) => {
  const { values, errors } = useFormikContext();

  return (
    <Form>
      {workflows.map((Workflow, index) => (
        <Workflow.Component key={index} />
      ))}

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
  const ActivityWorkflow = ActivityWorkflowFactory({});
  const UserWorkflow = UserWorkflowFactory({});

  const workflows = [ActivityWorkflow, UserWorkflow];
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
      <BookingRequestFormik workflows={workflows} />
    </Formik>
  );
};

export default BookingRequestForm;
