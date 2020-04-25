import bookingConfig from '../constants';

/**
 * map payload for workflow
 * @function
 * @param {object} values - formik values
 * @returns {object} mappedPayload - returns mapped payload
 */
const payload = (values) => {
  return {
    [bookingConfig.INPUT_DATE]: values[bookingConfig.INPUT_DATE],
    [bookingConfig.INPUT_START_TIME]: values[bookingConfig.INPUT_START_TIME],
    [bookingConfig.INPUT_END_TIME]: values[bookingConfig.INPUT_END_TIME],
  };
};

export default payload;
