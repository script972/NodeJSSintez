import Company from "./model/Company";

export function findSome(map: Map<string, Company>, value:string) : Company|undefined {
    return map.get(value);
}

export function capHas(map: Map<string, Company>, value:string) : boolean {
    return map.has(value);
}
