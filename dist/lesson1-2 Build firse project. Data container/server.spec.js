"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
describe("First test example", () => {
    it("makes testing JavaScript awesome!", () => {
        expect(server_1.add(3, 5)).toBe(8);
    });
});
