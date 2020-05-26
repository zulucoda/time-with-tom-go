import React from 'react';
import payload from './payload';
import validate from './validate';
import initialValues from './initial-values';
import isActive from './active';
import { useFormikContext } from 'formik';
import Payment from './component/payment-form';
import Free from './component/free';

/**
 * User Workflow Factory
 * @param {Object} options
 * @return {Workflow}
 */
const UserWorkflowFactory = ({ ...options }) => {
  return {
    Component: () => {
      const { values } = useFormikContext();
      return isActive(values) ? <Payment /> : <Free />;
    },
    payload: (values) => (isActive(values) ? payload(values) : {}),
    validate: (values) => (isActive(values) ? validate(values) : {}),
    isActive: (values) => isActive(values),
    initialValues,
  };
};

export default UserWorkflowFactory;
