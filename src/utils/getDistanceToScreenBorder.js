const getDistanceToScreenBorder = (element) => {
    if (!element) return [];

    const { top, left, bottom, right } = element.getBoundingClientRect();

    const distanceToTop = top;
    const distanceToBottom = window.innerHeight - bottom;
    const distanceToLeft = left;
    const distanceToRight = window.innerWidth - right;

    return [distanceToTop, distanceToBottom, distanceToLeft, distanceToRight];
};

export default getDistanceToScreenBorder;
