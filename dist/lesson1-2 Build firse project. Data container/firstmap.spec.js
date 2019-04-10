"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const firstmap_1 = require("./firstmap");
const Company_1 = __importStar(require("./model/Company"));
describe("Map Test", () => {
    const testMap = new Map();
    const GFL = new Company_1.default("GFL", "+1552", Company_1.Legacy.FOP, 1234);
    const GL = new Company_1.default("GL", "+380936723", Company_1.Legacy.OOO, 4231);
    const Extawest = new Company_1.default("ExtraWest", "+45323", Company_1.Legacy.FOP, 4123421);
    const MobiDev = new Company_1.default("MobiDev", "+3215462234", Company_1.Legacy.OOO, 63234321342);
    beforeEach(() => {
        testMap.set("GFL", GFL);
        testMap.set("GL", GL);
        testMap.set("Extawest", Extawest);
    });
    it("makes testing map", () => {
        expect(firstmap_1.findSome(testMap, "GFL")).toBe(GFL);
    });
    it("makes testing is not equals map", () => {
        expect(firstmap_1.findSome(testMap, "GFL")).not.toBe(MobiDev);
    });
    it("makes testing string", () => {
        expect(firstmap_1.capHas(testMap, "MobiDev")).toBe(false);
    });
    it("makes testing string", () => {
        expect(firstmap_1.capHas(testMap, "GFL")).toEqual(true);
    });
});
