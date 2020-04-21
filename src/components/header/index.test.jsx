import React from 'react';
import { render } from '@testing-library/react';
import Header from '.';

describe('header component', function () {
  test('does it render', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
