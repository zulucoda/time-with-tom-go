import { render } from '@testing-library/react';
import FormLayout from './index';
import React from 'react';

describe('Components - Form FormLayout - Unit Test', function () {
  test('does it render', () => {
    const { container } = render(<FormLayout />);
    expect(container).toMatchSnapshot();
  });
});
