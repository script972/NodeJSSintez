import {chartAt, sizeString} from "./fiststring";

describe("String Test", () => {
    it("makes testing string", () => {
        expect(sizeString("lol")).toBe(3);
    });

    it("string is not null", () => {
        expect(sizeString("test string")).not.toBe(0);
    });

    it("CharAt String", () => {
        expect(chartAt("testsA")).toEqual("A");
    });
});
