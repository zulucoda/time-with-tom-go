import AlertError from '../../alerts/error';
import React from 'react';
import { bool, shape, string } from 'prop-types';

/**
 * Formik Error field
 * @param {FieldMetaProps} meta
 * @returns {React.FunctionComponent}
 */
const ErrorField = ({ meta: { error, touched } }) =>
  touched && error && <AlertError message={error} />;

ErrorField.propTypes = {
  meta: shape({
    error: string,
    touched: bool,
  }),
};

export default ErrorField;
