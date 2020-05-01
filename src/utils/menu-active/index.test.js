import isMenuActive from '.';

describe('Utils - Menu Active - Unit Test', () => {
  test('should return true when ActiveLink is the same as current link', () => {
    /**
     * Active Link
     * @type {ActiveLink}
     */
    const activeLink = {
      path: '/some-path',
      url: '/some-path',
      isExact: true,
      params: {},
    };

    const act = isMenuActive(activeLink, '/some-path');
    expect(act).toBeTruthy();
  });
  test('should return false when ActiveLink is NOT the same as current link', () => {
    /**
     * Active Link
     * @type {ActiveLink}
     */
    const activeLink = {
      path: '/some-path',
      url: '/some-path',
      isExact: true,
      params: {},
    };

    const act = isMenuActive(activeLink, 'other-link');
    expect(act).toBeFalsy();
  });

  test('should return false when ActiveLink is null', () => {
    const activeLink = null;

    const act = isMenuActive(activeLink, 'other-link');
    expect(act).toBeFalsy();
  });
});
