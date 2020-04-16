import React, { useState } from 'react';
import activityConfig from './constants';

const Activity = () => {
  const [selectedActivity, setActivity] = useState(
    activityConfig.ACTIVITY_VALUE_NONE,
  );

  const onChange = (e) => {
    e.preventDefault();
    setActivity(e.target.value);
  };

  return (
    <div>
      <select
        name={activityConfig.SELECT_NAME}
        value={selectedActivity}
        onChange={onChange}
      >
        {activityConfig.ACTIVITY_LIST.map(({ value, title }, index) => (
          <option key={index} value={value}>
            {title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Activity;
