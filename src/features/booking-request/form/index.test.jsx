import { render } from '@testing-library/react';
import BookingRequestForm from '.';
import React from 'react';

describe('Features - Booking Request - Form - Unit Test', function () {
  test('does it render', () => {
    const { container } = render(<BookingRequestForm />);
    expect(container).toMatchSnapshot();
  });
});
