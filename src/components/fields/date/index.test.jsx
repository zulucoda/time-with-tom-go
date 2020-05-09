import { render } from '@testing-library/react';
import {
  DateAndTimePickerProviderWrapperTestUtil,
  FormikWrapperTestUtil,
} from '../../../test-util';
import DateField from '.';
import React from 'react';

describe('Components - Fields - Date - Unit Test', () => {
  test('does it render', () => {
    const props = {
      name: 'name',
    };
    const { container } = render(
      <DateAndTimePickerProviderWrapperTestUtil>
        <FormikWrapperTestUtil Component={DateField} props={props} />
      </DateAndTimePickerProviderWrapperTestUtil>,
    );
    expect(container).toMatchSnapshot();
  });
});
