import activityConfig from '../constants';
import getActivityAmount from '.';

describe('Worklfows - Activity - Util - Unit Tests', () => {
  describe('getActivityAmount', () => {
    test('should return the activity amount for valid activity', () => {
      const values = {
        [activityConfig.SELECT_NAME]: 'golf',
      };

      const act = getActivityAmount(values);
      expect(act).toBe(500);
    });

    test('should return 0 for INVALID activity', () => {
      const values = {
        [activityConfig.SELECT_NAME]: 'unknown activity',
      };

      const act = getActivityAmount(values);
      expect(act).toBe(0);
    });
  });
});
