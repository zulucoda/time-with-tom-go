import paymentConfig from '../constants';

/**
 * map payload for workflow
 * @function
 * @param {object} values - formik values
 * @returns {object} mappedPayload - returns mapped payload
 */
const payload = (values) => {
  return {
    [paymentConfig.CC_PAYMENT_PROCESSED]:
      values[paymentConfig.INPUT_CC_NUMBER] !== '',
  };
};

export default payload;
