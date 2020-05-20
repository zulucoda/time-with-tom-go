import React from 'react';
import Activity from './component';
import payload from './payload';
import validate from './validate';
import initialValues from './initial-values';
import isActive from './active';

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
    isActive: (values) => isActive(values),
    initialValues,
  };
};

export default ActivityWorkflowFactory;
