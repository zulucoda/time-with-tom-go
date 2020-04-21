import { render } from '@testing-library/react';
import BookingRequest from '.';
import React from 'react';

describe('Features - Booking Request - Unit Test', function () {
  test('does it render', () => {
    const { container } = render(<BookingRequest />);
    expect(container).toMatchSnapshot();
  });
});
