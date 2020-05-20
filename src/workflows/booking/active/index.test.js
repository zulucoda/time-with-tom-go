import isActive from '.';

describe('Workflows - Booking - Is Active - Unit Test', () => {
  test('workflow is always active', () => {
    const act = isActive({});
    expect(act).toBeTruthy();
  });
});
