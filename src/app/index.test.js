import { render } from '@testing-library/react';
import App from '.';
import React from 'react';

describe('App - Unit Test', function () {
  test('does it render', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
