import isActive from '.';
import activityConfig from '../../activity/constants';

describe('Workflows - Payment - Is Active - Unit Test', () => {
  describe('Business Rule', () => {
    test('Only display payment for paid activities - where amount is greater 0 (all paid items)', () => {
      const values = {
        [activityConfig.SELECT_NAME]: 'golf',
      };

      const act = isActive(values);
      expect(act).toBeTruthy();
    });

    test('Do NOT collect payment for free activities - where amount is 0', () => {
      const values = {
        [activityConfig.SELECT_NAME]: 'squash',
      };

      const act = isActive(values);
      expect(act).toBeFalsy();
    });
  });
});
