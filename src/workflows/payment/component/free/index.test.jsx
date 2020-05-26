import React from 'react';
import { render } from '@testing-library/react';
import Free from './index';
import { FormikWrapperTestUtil } from '../../../../test-util';

describe('Workflow - Payment - Component - Free - Unit Test', function () {
  test('does it render', () => {
    const { container } = render(<FormikWrapperTestUtil Component={Free} />);
    expect(container).toMatchSnapshot();
  });
});
