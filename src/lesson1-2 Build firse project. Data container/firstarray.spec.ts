import {addToArray, reverse, size} from "./firstarray";
import Company, {Legacy} from "./model/Company";


describe("Array Test", () => {

    const testArray: Array<Company> = new Array<Company>();

    const GFL: Company = new Company("GFL", "+1552", Legacy.FOP, 1234);
    const GL: Company = new Company("GL", "+380936723", Legacy.OOO, 4231);
    const Extawest: Company = new Company("ExtraWest", "+45323", Legacy.FOP, 4123421);

    const MobiDev: Company = new Company("MobiDev", "+3215462234", Legacy.OOO, 63234321342);

    beforeEach(() => {
        testArray.push(GFL);
        testArray.push(GL);
        testArray.push(Extawest);
    });

    it("makes testing array size", () => {
        expect(size(testArray)).toBeGreaterThan(-1);
        expect(size(testArray)).toBeLessThan(100);
    });

    it("makes testing reverse array", () => {
        expect(reverse(testArray)).toEqual(GFL);
    });

    it("makes testing string add new item", () => {
        expect(addToArray(testArray, MobiDev).indexOf(MobiDev)).toBeGreaterThan(-1);
    });

});
