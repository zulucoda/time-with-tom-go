import { Form } from 'formik';
import React from 'react';
import { array } from 'prop-types';
import styled from 'styled-components';
import { COLOURS, GRADIENTS } from '../../../config';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SubmitButton = styled.button`
  background: ${GRADIENTS.BLUE};
  color: ${COLOURS.LIGHT_GRAY};

  font-size: 1em;
  margin-top: 1rem;
  padding: 0.25em 1em;
  border: 2px solid ${COLOURS.GREEN};
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background: ${COLOURS.GREEN};
    color: ${COLOURS.DARK_BLUE};
  }
  &:target {
    border: 0;
  }
`;

const BookingRequestForm = ({ workflows }) => {
  return (
    <Form>
      <Container>
        {workflows.map((Workflow, index) => (
          <Workflow.Component key={index} />
        ))}
        <SubmitButton type="submit"> Submit </SubmitButton>
      </Container>
    </Form>
  );
};

BookingRequestForm.propTypes = {
  workflows: array.isRequired,
};

export default BookingRequestForm;
