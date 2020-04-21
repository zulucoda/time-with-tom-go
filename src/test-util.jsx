import React from 'react';
import { oneOfType, shape, element, func } from 'prop-types';
import { Form, Formik } from 'formik';

/**
 * Formik Wrapper Test Util
 * @param {React.Component} Component
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
