import userConfig from '../constants';

/**
 * map payload for workflow
 * @function
 * @param {object} values - formik values
 * @returns {object} mappedPayload - returns mapped payload
 */
const payload = (values) => {
  return {
    [userConfig.INPUT_NAME]: values[userConfig.INPUT_NAME],
    [userConfig.INPUT_SURNAME]: values[userConfig.INPUT_SURNAME],
    [userConfig.INPUT_EMAIL]: values[userConfig.INPUT_EMAIL],
  };
};

export default payload;
