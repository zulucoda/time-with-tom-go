import bookingConfig from '../constants';

/**
 * validate values
 * @function
 * @param {object} values - formik values
 * @returns {object} error - returns empty error object when no errors | returns error object
 */
const validate = (values) => {
  const errors = {};

  if (values[bookingConfig.INPUT_DATE] === '') {
    errors[bookingConfig.INPUT_DATE] = 'Date is required.';
  }

  if (values[bookingConfig.INPUT_START_TIME] === '') {
    errors[bookingConfig.INPUT_START_TIME] = 'Start time is required.';
  }

  if (values[bookingConfig.INPUT_END_TIME] === '') {
    errors[bookingConfig.INPUT_END_TIME] = 'End time is required.';
  }

  return errors;
};

export default validate;
