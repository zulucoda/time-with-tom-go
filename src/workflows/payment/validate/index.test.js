import validate from '.';
import paymentConfig from '../constants';

describe('Workflows - User - Validate - Unit Test', () => {
  test('when there are errors it should return error object', () => {
    const values = {
      [paymentConfig.INPUT_CC_NAME]: '',
      [paymentConfig.INPUT_CC_NUMBER]: '',
      [paymentConfig.INPUT_CC_EXPIRY_MONTH]: 0,
      [paymentConfig.INPUT_CC_EXPIRY_YEAR]: 0,
      [paymentConfig.INPUT_CC_CVC]: 0,
    };
    const act = validate(values);
    expect(act).toMatchSnapshot();
  });

  test('when there are NO errors it should return and empty error object', () => {
    const values = {
      [paymentConfig.INPUT_CC_NAME]: 'some cc name',
      [paymentConfig.INPUT_CC_NUMBER]: '55556666777788889999',
      [paymentConfig.INPUT_CC_EXPIRY_MONTH]: 1,
      [paymentConfig.INPUT_CC_EXPIRY_YEAR]: 2020,
      [paymentConfig.INPUT_CC_CVC]: 300,
    };
    const act = validate(values);
    expect(act).toMatchSnapshot();
  });
});
