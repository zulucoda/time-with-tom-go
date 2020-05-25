import paymentConfig from '../constants';

/**
 * map payload for workflow
 * @function
 * @param {object} values - formik values
 * @returns {object} mappedPayload - returns mapped payload
 */
const payload = (values) => {
  return {
    [paymentConfig.INPUT_CC_CVC]: values[paymentConfig.INPUT_CC_CVC],
    [paymentConfig.INPUT_CC_EXPIRY_YEAR]:
      values[paymentConfig.INPUT_CC_EXPIRY_YEAR],
    [paymentConfig.INPUT_CC_EXPIRY_MONTH]:
      values[paymentConfig.INPUT_CC_EXPIRY_MONTH],
    [paymentConfig.INPUT_CC_NUMBER]: values[paymentConfig.INPUT_CC_NUMBER],
    [paymentConfig.INPUT_CC_NAME]: values[paymentConfig.INPUT_CC_NAME],
  };
};

export default payload;
