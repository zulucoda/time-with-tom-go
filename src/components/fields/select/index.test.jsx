import { render } from '@testing-library/react';
import { FormikWrapperTestUtil } from '../../../test-util';
import SelectField from '.';
import React from 'react';

describe('Components - Fields - Select - Unit Test', () => {
  test('does it render', () => {
    const props = {
      name: 'name',
      label: 'name',
      list: [],
    };
    const { container } = render(
      <FormikWrapperTestUtil Component={SelectField} props={props} />,
    );
    expect(container).toMatchSnapshot();
  });
  test('should render select with options', () => {
    const props = {
      name: 'name',
      label: 'name',
      list: [
        { title: 'some title 1', value: 'some value 1' },
        { title: 'some title 2', value: 'some value 2' },
        { title: 'some title 3', value: 'some value 3' },
        { title: 'some title 4', value: 'some value 4' },
        { title: 'some title 5', value: 'some value 5' },
        { title: 'some title 6', value: 'some value 6' },
        { title: 'some title 7', value: 'some value 7' },
        { title: 'some title 8', value: 'some value 8' },
        { title: 'some title 9', value: 'some value 9' },
      ],
    };
    const { container } = render(
      <FormikWrapperTestUtil Component={SelectField} props={props} />,
    );
    expect(container).toMatchSnapshot();
  });
});
