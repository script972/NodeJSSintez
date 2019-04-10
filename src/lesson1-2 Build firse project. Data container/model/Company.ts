export default class Company {

    private title: string;
    private phone: string;
    private legacy: Legacy;
    private dateCreate: number;

    public constructor(title: string, phone: string, legacy: Legacy, dateCreate: number) {
        this.title = title;
        this.phone = phone;
        this.legacy = legacy;
        this.dateCreate = dateCreate;
    }

}

export enum Legacy {
    FOP = "fop",
    OOO = "ooo",
}
