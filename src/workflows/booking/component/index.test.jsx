import { render } from '@testing-library/react';
import {
  DateAndTimePickerProviderWrapperTestUtil,
  FormikWrapperTestUtil,
} from '../../../test-util';
import Booking from './index';
import React from 'react';

describe('Workflows - Booking - Component - Unit Test', () => {
  test('does it render', () => {
    const { container } = render(
      <DateAndTimePickerProviderWrapperTestUtil>
        <FormikWrapperTestUtil Component={Booking} />
      </DateAndTimePickerProviderWrapperTestUtil>,
    );
    expect(container).toMatchSnapshot();
  });
});
