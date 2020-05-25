import paymentConfig from '../constants';

/**
 * Initial Values
 * @type InitialValues
 */
const initialValues = {
  [paymentConfig.INPUT_CC_CVC]: 0,
  [paymentConfig.INPUT_CC_EXPIRY_MONTH]: 0,
  [paymentConfig.INPUT_CC_EXPIRY_YEAR]: 0,
  [paymentConfig.INPUT_CC_NAME]: '',
  [paymentConfig.INPUT_CC_NUMBER]: '',
};

export default initialValues;
