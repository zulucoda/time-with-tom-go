import { Form, useFormikContext } from 'formik';
import React from 'react';
import { array } from 'prop-types';

const BookingRequestForm = ({ workflows }) => {
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

BookingRequestForm.propTypes = {
  workflows: array.isRequired,
};

export default BookingRequestForm;
