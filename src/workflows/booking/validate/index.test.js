import bookingConfig from '../constants';
import validate from '.';

describe('Workflows - Booking - Validate - Unit Test', () => {
  test('when there are errors it should return error object', () => {
    const values = {
      [bookingConfig.INPUT_DATE]: '',
      [bookingConfig.INPUT_START_TIME]: '',
      [bookingConfig.INPUT_END_TIME]: '',
    };
    const act = validate(values);
    expect(act).toMatchSnapshot();
  });

  test('when there are NO errors it should return and empty error object', () => {
    const values = {
      [bookingConfig.INPUT_DATE]: '2020-04-21',
      [bookingConfig.INPUT_START_TIME]: '08:00',
      [bookingConfig.INPUT_END_TIME]: '18:00',
    };
    const act = validate(values);
    expect(act).toMatchSnapshot();
  });
});
