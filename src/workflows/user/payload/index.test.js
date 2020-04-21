import payload from '.';
import userConfig from '../constants';

describe('Workflows - User - Payload - Unit Test', () => {
  test('should return mapped payload values', () => {
    const values = {
      [userConfig.INPUT_NAME]: 'some name',
      [userConfig.INPUT_SURNAME]: 'some surname',
      [userConfig.INPUT_EMAIL]: 'some@email.com',
    };
    const act = payload(values);
    expect(act).toMatchSnapshot();
  });
});
