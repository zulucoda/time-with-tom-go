import React from 'react';
import { render } from '@testing-library/react';
import Header from '.';
import { ReactRouterWrapperTestUtil } from '../../test-util';

describe('Components - Header - Unit Test', function () {
  test('does it render', () => {
    const { container } = render(
      <ReactRouterWrapperTestUtil Component={Header} />,
    );
    expect(container).toMatchSnapshot();
  });
});
