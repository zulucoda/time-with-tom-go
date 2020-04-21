import { render } from '@testing-library/react';
import React from 'react';
import ErrorField from '.';

describe('Components - Fields - Error - Unit Test', () => {
  test('does it render', () => {
    /**
     * meta
     * @type {FieldMetaProps}
     */
    const props = {
      error: 'Some Error',
      touched: true,
      initialError: '',
      initialTouched: false,
      initialValue: '',
      value: '',
    };
    const { container } = render(<ErrorField meta={props} />);
    expect(container).toMatchSnapshot();
  });

  test('when no error it must return null', () => {
    const { container } = render(<ErrorField meta={{}} />);
    expect(container).toMatchSnapshot();
  });
});
