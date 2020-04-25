import React from 'react';
import { useField } from 'formik';
import ErrorField from '../error';
import { string } from 'prop-types';

/**
 * Formik Text Field
 * @param {string} label
 * @param {object} props
 * @returns {React.FunctionComponent}
 */
const TextField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <>
      <label>{label}</label>
      <input {...field} {...props} />
      <ErrorField meta={meta} />
    </>
  );
};

TextField.propTypes = {
  label: string.isRequired,
};

export default TextField;
