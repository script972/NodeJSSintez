"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function size(array) {
    return array.length;
}
exports.size = size;
function reverse(array) {
    array = array.reverse();
    return array.pop();
}
exports.reverse = reverse;
function addToArray(array, addItem) {
    array.push(addItem);
    return array;
}
exports.addToArray = addToArray;
