"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const firstarray_1 = require("./firstarray");
const Company_1 = __importStar(require("./model/Company"));
describe("Array Test", () => {
    const testArray = new Array();
    const GFL = new Company_1.default("GFL", "+1552", Company_1.Legacy.FOP, 1234);
    const GL = new Company_1.default("GL", "+380936723", Company_1.Legacy.OOO, 4231);
    const Extawest = new Company_1.default("ExtraWest", "+45323", Company_1.Legacy.FOP, 4123421);
    const MobiDev = new Company_1.default("MobiDev", "+3215462234", Company_1.Legacy.OOO, 63234321342);
    beforeEach(() => {
        testArray.push(GFL);
        testArray.push(GL);
        testArray.push(Extawest);
    });
    it("makes testing array size", () => {
        expect(firstarray_1.size(testArray)).toBeGreaterThan(-1);
        expect(firstarray_1.size(testArray)).toBeLessThan(100);
    });
    it("makes testing reverse array", () => {
        expect(firstarray_1.reverse(testArray)).toEqual(GFL);
    });
    it("makes testing string add new item", () => {
        expect(firstarray_1.addToArray(testArray, MobiDev).indexOf(MobiDev)).toBeGreaterThan(-1);
    });
});
