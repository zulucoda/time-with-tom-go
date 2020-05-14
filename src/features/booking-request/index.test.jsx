import { render } from '@testing-library/react';
import BookingRequest from '.';
import React from 'react';
import {
  DateAndTimePickerProviderWrapperTestUtil,
  ReactRouterWrapperTestUtil,
} from '../../test-util';

describe('Features - Booking Request - Unit Test', function () {
  test('does it render', () => {
    const { container } = render(
      <ReactRouterWrapperTestUtil>
        <DateAndTimePickerProviderWrapperTestUtil>
          <BookingRequest />
        </DateAndTimePickerProviderWrapperTestUtil>
      </ReactRouterWrapperTestUtil>,
    );
    expect(container).toMatchSnapshot();
  });
});
