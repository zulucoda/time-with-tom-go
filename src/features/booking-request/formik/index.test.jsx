import { render } from '@testing-library/react';
import React from 'react';
import BookingRequestFormik from '.';
import {
  DateAndTimePickerProviderWrapperTestUtil,
  ReactRouterWrapperTestUtil,
} from '../../../test-util';

describe('Features - Booking Request - Form - Unit Test', function () {
  test('does it render', () => {
    const { container } = render(
      <ReactRouterWrapperTestUtil>
        <DateAndTimePickerProviderWrapperTestUtil>
          <BookingRequestFormik />
        </DateAndTimePickerProviderWrapperTestUtil>
      </ReactRouterWrapperTestUtil>,
    );
    expect(container).toMatchSnapshot();
  });
});
