import { useField } from 'formik';
import ErrorField from '../error';
import React from 'react';
import { arrayOf, shape, string } from 'prop-types';

const SelectField = ({ label, list, ...props }) => {
  const [field, meta, helpers] = useField(props);

  const { value } = meta;
  const { setValue } = helpers;

  const onChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <div>
      <label>{label}</label>
      <select {...field} {...props} value={value} onChange={onChange}>
        {list.map(({ value, title }, index) => (
          <option key={index} value={value}>
            {title}
          </option>
        ))}
      </select>
      <ErrorField meta={meta} />
    </div>
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
