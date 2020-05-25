import initialValues from '.';

describe('Workflows - User - Initial Values - Unit Test', () => {
  test('should return initial values', () => {
    const act = initialValues;
    expect(act).toMatchSnapshot();
  });
});
