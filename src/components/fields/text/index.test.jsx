import { render } from '@testing-library/react';
import { FormikWrapperTestUtil } from '../../../test-util';
import TextField from '.';
import React from 'react';

describe('Components - Fields - Text - Unit Test', () => {
  test('does it render', () => {
    const props = {
      name: 'name',
      type: 'text',
      label: 'name',
    };
    const { container } = render(
      <FormikWrapperTestUtil Component={TextField} props={props} />,
    );
    expect(container).toMatchSnapshot();
  });
});
