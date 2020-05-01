/**
 *
 * @param {ActiveLink} activeLink
 * @param {string} currentLink
 * @return {*|boolean}
 */
const isMenuActive = (activeLink, currentLink) =>
  activeLink && activeLink.isExact && currentLink === activeLink.path;

export default isMenuActive;
