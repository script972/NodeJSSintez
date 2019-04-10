"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Company {
    constructor(title, phone, legacy, dateCreate) {
        this.title = title;
        this.phone = phone;
        this.legacy = legacy;
        this.dateCreate = dateCreate;
    }
}
exports.default = Company;
var Legacy;
(function (Legacy) {
    Legacy["FOP"] = "fop";
    Legacy["OOO"] = "ooo";
})(Legacy = exports.Legacy || (exports.Legacy = {}));
