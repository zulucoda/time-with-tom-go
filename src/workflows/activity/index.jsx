import React from 'react';
import Activity from './component';
import getPayload from './payload';
import validate from './validate';
import initialValues from './initial-values';

const ActivityWorkflow = ({ ...options }) => {
  return {
    component: () => <Activity />,
    payload: (values) => getPayload(values),
    validate: (values) => validate(values),
    initialValues,
  };
};

export default ActivityWorkflow;
