/**
 * Get distance to screen border
 * @param {HTMLElement} element
 * @returns {Array} [distanceToTop, distanceToBottom, distanceToLeft, distanceToRight]ß
 */
const getDistanceToScreenBorder = (element) => {
    if (!element || !(element instanceof HTMLElement)) return [];

    const { top, left, bottom, right } = element.getBoundingClientRect();

    const distanceToTop = top;
    const distanceToBottom = window.innerHeight - bottom;
    const distanceToLeft = left;
    const distanceToRight = window.innerWidth - right;

    return [distanceToTop, distanceToBottom, distanceToLeft, distanceToRight];
};

export default getDistanceToScreenBorder;
