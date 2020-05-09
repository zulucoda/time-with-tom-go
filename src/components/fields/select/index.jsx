import { useField } from 'formik';
import ErrorField from '../error';
import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import styled from 'styled-components';
import { InputLabel } from '@material-ui/core';
import { COLOURS } from '../../../config';

const Container = styled.div`
  width: 100%;

  label {
    font-weight: bold;
    color: white;
    text-transform: capitalize;
  }

  .MuiInput-root {
    width: 100%;
    color: white;
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
    .MuiSvgIcon-root {
      &.MuiSelect-icon {
        color: ${COLOURS.LIGHT_GRAY};
      }
    }
  }
`;

const SelectField = ({ label, list, ...props }) => {
  const [field, meta, helpers] = useField(props);

  const { value } = meta;
  const { setValue } = helpers;

  const onChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <Container>
      <InputLabel>{label}</InputLabel>
      <Select {...field} {...props} value={value} onChange={onChange}>
        {list.map(({ value, title }, index) => (
          <MenuItem key={index} value={value}>
            {title}
          </MenuItem>
        ))}
      </Select>
      <ErrorField meta={meta} />
    </Container>
  );
};

SelectField.defaultProps = {
  list: [],
};

SelectField.propTypes = {
  label: string.isRequired,
  name: string.isRequired,
  list: arrayOf(
    shape({
      value: string.isRequired,
      title: string.isRequired,
    }),
  ),
};

export default SelectField;
