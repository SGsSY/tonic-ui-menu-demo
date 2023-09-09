import getDistanceToScreenBorder from "../../src/utils/getDistanceToScreenBorder";

describe("getDistanceToScreenBorder", () => {
    test("pass none dom parameter will return empty array", () => {
        expect(getDistanceToScreenBorder()).toEqual([]);
        expect(getDistanceToScreenBorder(1)).toEqual([]);
        expect(getDistanceToScreenBorder("1")).toEqual([]);
        expect(getDistanceToScreenBorder(null)).toEqual([]);
        expect(getDistanceToScreenBorder({})).toEqual([]);
    });

    test("pass dom parameter will return number array which length = 4", () => {
        const dom = document.createElement("div");
        const result = getDistanceToScreenBorder(dom);
        expect(result).toEqual(expect.any(Array));
        expect(result.length).toBe(4);
    });
});
