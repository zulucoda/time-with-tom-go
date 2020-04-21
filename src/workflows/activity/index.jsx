import React from 'react';
import Activity from './component';
import payload from './payload';
import validate from './validate';
import initialValues from './initial-values';

/**
 * Activity Workflow Factory
 * @param {Object} options
 * @return {Workflow}
 * @constructor
 */
const ActivityWorkflowFactory = ({ ...options }) => {
  return {
    Component: () => <Activity />,
    payload: (values) => payload(values),
    validate: (values) => validate(values),
    initialValues,
  };
};

export default ActivityWorkflowFactory;
