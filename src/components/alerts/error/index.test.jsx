import React from 'react';
import { render } from '@testing-library/react';
import AlertError from '.';

describe('Components - Alerts - Error - Unit Test', () => {
  test('does it render', () => {
    const { container } = render(<AlertError message="Some error" />);
    expect(container).toMatchSnapshot();
  });
});
