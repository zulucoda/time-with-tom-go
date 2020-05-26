import activityConfig from '../constants';

/**
 * Get activity amount
 * @param {Values} values
 * @return {number}
 */
const getActivityAmount = (values) => {
  return (
    activityConfig.ACTIVITY_LIST.find(
      (activity) => values[activityConfig.SELECT_NAME] === activity.value,
    )?.amount ?? 0
  );
};

export default getActivityAmount;
