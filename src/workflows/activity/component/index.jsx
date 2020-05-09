import React from 'react';
import activityConfig from '../constants';
import SelectField from '../../../components/fields/select';

const Activity = () => {
  return (
    <div>
      <SelectField
        label={activityConfig.SELECT_NAME}
        name={activityConfig.SELECT_NAME}
        list={activityConfig.ACTIVITY_LIST}
      />
    </div>
  );
};

export default Activity;
