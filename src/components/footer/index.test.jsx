import { render } from '@testing-library/react';
import Footer from '.';
import React from 'react';

describe('Components - Footer - Unit Test', function () {
  test('does it render', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
