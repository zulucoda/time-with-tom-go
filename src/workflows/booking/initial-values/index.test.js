import initialValues from '.';

describe('Workflows - Booking - Initial Values - Unit Test', () => {
  test('should return initial values', () => {
    const act = initialValues;
    expect(act).toMatchSnapshot();
  });
});
