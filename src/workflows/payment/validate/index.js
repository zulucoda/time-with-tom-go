import paymentConfig from '../constants';

/**
 * validate values
 * @function
 * @param {object} values - formik values
 * @returns {object} error - returns empty error object when no errors | returns error object
 */
const validate = (values) => {
  const errors = {};

  if (values[paymentConfig.INPUT_CC_NAME] === '') {
    errors[paymentConfig.INPUT_CC_NAME] = 'Cardholder name is required.';
  }

  if (values[paymentConfig.INPUT_CC_NUMBER] === '') {
    errors[paymentConfig.INPUT_CC_NUMBER] = 'Card number is required.';
  }

  if (values[paymentConfig.INPUT_CC_EXPIRY_MONTH] === '') {
    errors[paymentConfig.INPUT_CC_EXPIRY_MONTH] =
      'Card expiry month is required.';
  }

  if (values[paymentConfig.INPUT_CC_EXPIRY_YEAR] === '') {
    errors[paymentConfig.INPUT_CC_EXPIRY_YEAR] =
      'Card expiry year is required.';
  }
  if (values[paymentConfig.INPUT_CC_CVC] === '') {
    errors[paymentConfig.INPUT_CC_CVC] = 'Card CVC is required.';
  }

  return errors;
};

export default validate;
