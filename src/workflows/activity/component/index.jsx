import React from 'react';
import activityConfig from '../constants';
import { useField } from 'formik';

const Activity = () => {
  const [, meta, helpers] = useField({
    name: activityConfig.SELECT_NAME,
    value: activityConfig.ACTIVITY_VALUE_NONE,
  });

  const { value } = meta;
  const { setValue } = helpers;

  const onChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <div>
      <select
        name={activityConfig.SELECT_NAME}
        value={value}
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
