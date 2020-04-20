import activityConfig from '../constants';
import validate from '.';

describe('Workflows - Activity - Validate - Unit Test', () => {
  test('when there are errors it should return error object', () => {
    const values = {
      [activityConfig.SELECT_NAME]: activityConfig.ACTIVITY_VALUE_NONE,
    };
    const act = validate(values);
    expect(act).toMatchSnapshot();
  });

  test('when there are NO errors it should return and empty error object', () => {
    const values = {
      [activityConfig.SELECT_NAME]: activityConfig.ACTIVITY_LIST[1].value,
    };
    const act = validate(values);
    expect(act).toMatchSnapshot();
  });
});
