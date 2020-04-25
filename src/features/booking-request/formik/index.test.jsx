import { render } from '@testing-library/react';
import React from 'react';
import BookingRequestFormik from '.';

describe('Features - Booking Request - Form - Unit Test', function () {
  test('does it render', () => {
    const { container } = render(<BookingRequestFormik />);
    expect(container).toMatchSnapshot();
  });
});
