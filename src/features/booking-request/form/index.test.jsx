import { render } from '@testing-library/react';
import BookingRequestForm from '.';
import React from 'react';
import { FormikWrapperTestUtil } from '../../../test-util';

describe('Features - Booking Request - Form - Unit Test', function () {
  test('does it render', () => {
    const props = {
      workflows: [],
    };
    const { container } = render(
      <FormikWrapperTestUtil Component={BookingRequestForm} props={props} />,
    );
    expect(container).toMatchSnapshot();
  });
});
