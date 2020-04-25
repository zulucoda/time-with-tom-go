import { render } from '@testing-library/react';
import FormLayout from '.';
import React from 'react';

describe('Components - Form Layout - Unit Test', function () {
  test('does it render', () => {
    const { container } = render(<FormLayout />);
    expect(container).toMatchSnapshot();
  });
});
