import { render } from '@testing-library/react';
import {
  DateAndTimePickerProviderWrapperTestUtil,
  FormikWrapperTestUtil,
} from '../../../test-util';
import TimeField from '.';
import React from 'react';

describe('Components - Fields - Time - Unit Test', () => {
  test('does it render', () => {
    const props = {
      name: 'name',
    };
    const { container } = render(
      <DateAndTimePickerProviderWrapperTestUtil>
        <FormikWrapperTestUtil Component={TimeField} props={props} />
      </DateAndTimePickerProviderWrapperTestUtil>,
    );
    expect(container).toMatchSnapshot();
  });
});
