import userConfig from '../constants';
import validate from '.';

describe('Workflows - User - Validate - Unit Test', () => {
  test('when there are errors it should return error object', () => {
    const values = {
      [userConfig.INPUT_NAME]: '',
      [userConfig.INPUT_SURNAME]: '',
      [userConfig.INPUT_EMAIL]: '',
    };
    const act = validate(values);
    expect(act).toMatchSnapshot();
  });

  test('when there are NO errors it should return and empty error object', () => {
    const values = {
      [userConfig.INPUT_NAME]: 'some name',
      [userConfig.INPUT_SURNAME]: 'some surname',
      [userConfig.INPUT_EMAIL]: 'some email',
    };
    const act = validate(values);
    expect(act).toMatchSnapshot();
  });
});
