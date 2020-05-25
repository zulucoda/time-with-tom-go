import paymentFormat from './index';

describe('Utils - Payment Format - Unit Test', () => {
  test('should paid when true', () => {
    const act = paymentFormat(true);
    expect(act).toMatchSnapshot('yes');
  });
  test('should paid when false', () => {
    const act = paymentFormat(true);
    expect(act).toMatchSnapshot('no');
  });

  test('should null when n/a', () => {
    const act = paymentFormat(null);
    expect(act).toMatchSnapshot('n/a');
  });

  test('should undefined when n/a', () => {
    const act = paymentFormat(undefined);
    expect(act).toMatchSnapshot('n/a');
  });
});
