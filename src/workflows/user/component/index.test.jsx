import React from 'react';
import { render } from '@testing-library/react';
import User from '.';
import { FormikWrapperTestUtil } from '../../../test-util';

describe('Workflow - User - Component - Activity - Unit Test', function () {
  test('does it render', () => {
    const { container } = render(<FormikWrapperTestUtil Component={User} />);
    expect(container).toMatchSnapshot();
  });
});
