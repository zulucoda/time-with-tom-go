import userConfig from '../constants';

/**
 * validate values
 * @function
 * @param {object} values - formik values
 * @returns {object} error - returns empty error object when no errors | returns error object
 */
const validate = (values) => {
  const errors = {};

  if (values[userConfig.INPUT_NAME] === '') {
    errors[userConfig.INPUT_NAME] = 'Name is required.';
  }

  if (values[userConfig.INPUT_SURNAME] === '') {
    errors[userConfig.INPUT_SURNAME] = 'Surname is required.';
  }

  if (values[userConfig.INPUT_EMAIL] === '') {
    errors[userConfig.INPUT_EMAIL] = 'Email is required.';
  }

  return errors;
};

export default validate;
