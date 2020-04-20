import React from 'react';
import { render } from '@testing-library/react';
import Activity from './index';
import { FormikWrapperTestUtil } from '../../../test-util';

describe('Activity component', function () {
  test('does it render', () => {
    const { container } = render(
      <FormikWrapperTestUtil Component={Activity} />,
    );
    expect(container).toMatchSnapshot();
  });
});
