import activityConfig from '../constants';

/**
 * map payload for workflow
 * @function
 * @param {object} values - formik values
 * @returns {object} mappedPayload - returns mapped payload
 */
const payload = (values) => {
  return {
    [activityConfig.SELECT_NAME]: values[activityConfig.SELECT_NAME],
  };
};

export default payload;
