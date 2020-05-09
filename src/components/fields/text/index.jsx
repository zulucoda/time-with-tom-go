import React from 'react';
import { useField } from 'formik';
import ErrorField from '../error';
import { string } from 'prop-types';
import TextFieldUi from '@material-ui/core/TextField';
import styled from 'styled-components';
import { COLOURS } from '../../../config';

const Container = styled.div`
  width: 100%;

  .MuiFormControl-root {
    label {
      color: ${COLOURS.LIGHT_GRAY};
      font-weight: bold;
      text-transform: capitalize;
      &.Mui-focused {
        color: ${COLOURS.GREEN};
      }
    }
    &.MuiTextField-root {
      width: 100%;
      .MuiInput-root {
        color: ${COLOURS.LIGHT_GRAY};
        &.MuiInput-underline {
          border-color: ${COLOURS.LIGHT_GRAY};
          &:hover {
            border-color: ${COLOURS.LIGHT_GRAY};
          }
          &::before {
            border-color: ${COLOURS.LIGHT_GRAY};
          }
          &::after {
            border-color: ${COLOURS.GREEN};
          }
        }
      }
    }
  }
`;

/**
 * Formik Text Field
 * @param {string} label
 * @param {object} props
 * @returns {React.FunctionComponent}
 */
const TextField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <Container>
      <TextFieldUi label={label} {...field} {...props} />
      <ErrorField meta={meta} />
    </Container>
  );
};

TextField.propTypes = {
  label: string.isRequired,
};

export default TextField;
