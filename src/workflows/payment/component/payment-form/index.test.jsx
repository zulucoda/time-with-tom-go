import React from 'react';
import { render } from '@testing-library/react';
import Payment from './index';
import { FormikWrapperTestUtil } from '../../../../test-util';

describe('Workflow - Payment - Component - Payment - Unit Test', function () {
  test('does it render', () => {
    const { container } = render(<FormikWrapperTestUtil Component={Payment} />);
    expect(container).toMatchSnapshot();
  });
});
