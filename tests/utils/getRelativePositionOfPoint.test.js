import getRelativePositionOfPoint from "../../src/utils/getRelativePositionOfPoint";

describe("getRelativePositionOfPoint", () => {
    test("pass none number parameter will return empty array", () => {
        expect(getRelativePositionOfPoint()).toEqual([]);
        expect(getRelativePositionOfPoint("1", "2", "3", "4")).toEqual([]);
        expect(getRelativePositionOfPoint(null, null, null, null)).toEqual([]);
        expect(getRelativePositionOfPoint({}, {}, {}, {})).toEqual([]);
    });

    test("pass number parameter but not fill four position will return empty array", () => {
        expect(getRelativePositionOfPoint(1, 2)).toEqual([]);
    });

    test("pass four number parameter will return string array ['top' or 'bottom', 'left' or 'right']", () => {
        const topLeft = getRelativePositionOfPoint(0, 100, 0, 100);
        expect(topLeft).toEqual(["top", "left"]);
        const topRight = getRelativePositionOfPoint(0, 100, 100, 0);
        expect(topRight).toEqual(["top", "right"]);
        const bottomLeft = getRelativePositionOfPoint(100, 0, 0, 100);
        expect(bottomLeft).toEqual(["bottom", "left"]);
        const bottomRight = getRelativePositionOfPoint(100, 0, 100, 0);
        expect(bottomRight).toEqual(["bottom", "right"]);
        const leftEqualToRight = getRelativePositionOfPoint(0, 100, 100, 100);
        expect(leftEqualToRight).toEqual(["top", "left"]);
        const topEqualToBottom = getRelativePositionOfPoint(100, 100, 0, 100);
        expect(topEqualToBottom).toEqual(["top", "left"]);
    });
});
