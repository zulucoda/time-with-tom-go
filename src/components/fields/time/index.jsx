import { useField } from 'formik';
import { TimePicker } from '@material-ui/pickers';
import ErrorField from '../error';
import React from 'react';
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

const TimeField = (props) => {
  const [field, meta, helpers] = useField(props);

  const { value } = meta;
  const { setValue } = helpers;

  return (
    <Container>
      <TimePicker
        autoOk
        placeholder="18:00"
        value={value}
        onChange={(date) => setValue(date)}
        ampm={false}
        name={field.name}
        {...props}
      />
      <ErrorField meta={meta} />
    </Container>
  );
};

export default TimeField;
