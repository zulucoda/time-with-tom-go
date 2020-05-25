import React from 'react';
import User from './component';
import payload from './payload';
import validate from './validate';
import initialValues from './initial-values';
import isActive from './active';

/**
 * User Workflow Factory
 * @param {Object} options
 * @return {Workflow}
 */
const UserWorkflowFactory = ({ ...options }) => {
  return {
    Component: () => <User />,
    payload: (values) => payload(values),
    validate: (values) => validate(values),
    isActive: (values) => isActive(values),
    initialValues,
  };
};

export default UserWorkflowFactory;
