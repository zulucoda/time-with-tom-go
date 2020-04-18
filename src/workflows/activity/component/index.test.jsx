import React from 'react';
import { render } from '@testing-library/react';
import Activity from './index';

describe('Activity component', function () {
  test('does it render', () => {
    const { container } = render(<Activity />);
    expect(container).toMatchSnapshot();
  });
});
