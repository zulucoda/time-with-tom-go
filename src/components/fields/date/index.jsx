import React from 'react';
import { DatePicker } from '@material-ui/pickers';
import { useField } from 'formik';
import styled from 'styled-components';
import ErrorField from '../error';
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

const DateField = (props) => {
  const [field, meta, helpers] = useField(props);

  const { value } = meta;
  const { setValue } = helpers;

  return (
    <Container>
      <DatePicker
        autoOk
        placeholder="2020/04/21"
        value={value}
        onChange={(date) => setValue(date)}
        format="yyyy/MM/dd"
        name={field.name}
        {...props}
      />
      <ErrorField meta={meta} />
    </Container>
  );
};

export default DateField;
