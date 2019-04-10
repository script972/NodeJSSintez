import {capHas, findSome} from "./firstmap";
import Company, {Legacy} from "./model/Company";


describe("Map Test", () => {

    const testMap: Map<string, Company> = new Map<string, Company>();

    const GFL: Company = new Company("GFL", "+1552", Legacy.FOP, 1234);
    const GL: Company = new Company("GL", "+380936723", Legacy.OOO, 4231);
    const Extawest: Company = new Company("ExtraWest", "+45323", Legacy.FOP, 4123421);

    const MobiDev: Company = new Company("MobiDev", "+3215462234", Legacy.OOO, 63234321342);

    beforeEach(() => {
        testMap.set("GFL", GFL);
        testMap.set("GL", GL);
        testMap.set("Extawest", Extawest);
    });

    it("makes testing map", () => {
        expect(findSome(testMap, "GFL")).toBe(GFL);
    });

    it("makes testing is not equals map", () => {
        expect(findSome(testMap, "GFL")).not.toBe(MobiDev);
    });

    it("makes testing string", () => {
        expect(capHas(testMap, "MobiDev")).toBe(false);
    });

    it("makes testing string", () => {
        expect(capHas(testMap, "GFL")).toEqual(true);
    });
});
