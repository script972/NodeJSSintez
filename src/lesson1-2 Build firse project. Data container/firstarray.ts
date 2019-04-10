import Company from "./model/Company";

export function size(array: Array<Company>) : number {
    return array.length;
}

export function reverse(array: Array<Company>) : Company|undefined {
    array = array.reverse();
    return array.pop();
}

export function addToArray(array : Array<Company>, addItem : Company) : Array<Company> {
    array.push(addItem);
    return array;
}
