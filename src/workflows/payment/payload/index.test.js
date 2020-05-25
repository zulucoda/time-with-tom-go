import payload from '.';
import paymentConfig from '../constants';

describe('Workflows - User - Payload - Unit Test', () => {
  test('should return mapped payload values', () => {
    const values = {
      [paymentConfig.INPUT_CC_NAME]: 'some cc name',
      [paymentConfig.INPUT_CC_NUMBER]: '55556666777788889999',
      [paymentConfig.INPUT_CC_EXPIRY_MONTH]: 1,
      [paymentConfig.INPUT_CC_EXPIRY_YEAR]: 2020,
      [paymentConfig.INPUT_CC_CVC]: 300,
    };
    const act = payload(values);
    expect(act).toMatchSnapshot();
  });
});
