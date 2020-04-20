import payload from '.';
import activityConfig from '../constants';

describe('Workflows - Activity - Payload - Unit Test', () => {
  test('should return mapped payload values', () => {
    const values = {
      [activityConfig.SELECT_NAME]: activityConfig.ACTIVITY_LIST[1].value,
    };
    const act = payload(values);
    expect(act).toMatchSnapshot();
  });
});
