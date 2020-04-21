import activityConfig from '../constants';

/**
 * validate values
 * @function
 * @param {object} values - formik values
 * @returns {object} error - returns empty error object when no errors | returns error object
 */
const validate = (values) => {
  const errors = {};
  if (
    values[activityConfig.SELECT_NAME] === activityConfig.ACTIVITY_VALUE_NONE
  ) {
    errors[activityConfig.SELECT_NAME] = 'Please select activity';
  }
  return errors;
};

export default validate;
