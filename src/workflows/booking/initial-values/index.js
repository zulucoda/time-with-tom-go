import bookingConfig from '../constants';

/**
 * Initial Values
 * @type InitialValues
 */
const initialValues = {
  [bookingConfig.INPUT_DATE]: new Date(),
  [bookingConfig.INPUT_START_TIME]: new Date(),
  [bookingConfig.INPUT_END_TIME]: new Date(),
};

export default initialValues;
