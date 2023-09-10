/**
 * @description get position of point relative to the center of the screen
 * @param {Number} top
 * @param {Number} bottom
 * @param {Number} left
 * @param {Number} right
 * @returns {Array} ['top', 'left'], ['top', 'right'], ['bottom', 'left'], ['bottom', 'right']
 */
const getRelativePositionOfPoint = (top, bottom, left, right) => {
    if (typeof top !== "number" || typeof bottom !== "number" || typeof left !== "number" || typeof right !== "number")
        return [];

    return [top > bottom ? "bottom" : "top", left > right ? "right" : "left"];
};

export default getRelativePositionOfPoint;
