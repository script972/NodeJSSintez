"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fiststring_1 = require("./fiststring");
describe("String Test", () => {
    it("makes testing string", () => {
        expect(fiststring_1.sizeString("lol")).toBe(3);
    });
    it("string is not null", () => {
        expect(fiststring_1.sizeString("test string")).not.toBe(0);
    });
    it("CharAt String", () => {
        expect(fiststring_1.chartAt("testsA")).toEqual("A");
    });
});
