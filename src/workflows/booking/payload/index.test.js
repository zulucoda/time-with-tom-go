import payload from '.';
import bookingConfig from '../constants';

describe('Workflows - Booking - Payload - Unit Test', () => {
  test('should return mapped payload values', () => {
    const values = {
      [bookingConfig.INPUT_DATE]: '2020-04-21',
      [bookingConfig.INPUT_START_TIME]: '08:00',
      [bookingConfig.INPUT_END_TIME]: '18:00',
    };
    const act = payload(values);
    expect(act).toMatchSnapshot();
  });
});
