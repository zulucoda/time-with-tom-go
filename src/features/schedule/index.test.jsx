import { render } from '@testing-library/react';
import Schedule from '.';
import React from 'react';

describe('Features - Schedule - Unit Test', function () {
  test('does it render', () => {
    const { container } = render(<Schedule />);
    expect(container).toMatchSnapshot();
  });
});
