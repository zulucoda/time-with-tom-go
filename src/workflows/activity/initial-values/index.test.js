import initialValues from '.';

describe('Workflows - Activity - Initial Values - Unit Test', () => {
  test('should return initial values', () => {
    const act = initialValues;
    expect(act).toMatchSnapshot();
  });
});
