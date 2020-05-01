import React from 'react';
import { oneOfType, shape, element, func } from 'prop-types';
import { Form, Formik } from 'formik';
import { BrowserRouter as Router } from 'react-router-dom';

/**
 * Formik Wrapper Test Util
 * @param {React.FunctionComponent} Component
 * @param {Object} props
 * @param {Object} initialValues
 * @param {Function} onSubmit
 * @returns {Formik}
 */
export const FormikWrapperTestUtil = ({
  Component,
  props = {},
  initialValues = {},
  onSubmit = jest.fn(),
}) => (
  <Formik initialValues={initialValues} onSubmit={onSubmit}>
    <Form>
      <Component {...props} />
    </Form>
  </Formik>
);

FormikWrapperTestUtil.propTypes = {
  Component: oneOfType([element.isRequired, func]),
  props: shape({}),
  initialValues: shape({}),
  onSubmit: func,
};

/**
 * React Router Wrapper Test Util
 * @param {React.FunctionComponent} Component
 * @param {object} props
 * @returns {React.FunctionComponent}
 */
export const ReactRouterWrapperTestUtil = (props) => (
  <Router>{props.children}</Router>
);

ReactRouterWrapperTestUtil.propTypes = {
  Component: oneOfType([element.isRequired, func]),
  props: shape({}),
};
