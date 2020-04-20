import activityConfig from '../constants';

const payload = (values) => {
  return {
    [activityConfig.SELECT_NAME]: values[activityConfig.SELECT_NAME],
  };
};

export default payload;
