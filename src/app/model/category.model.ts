export class Category{
    constructor(
        public id?: number,
        public name?: string
    ){}
}

export enum CategoryAction{
    meyve = 1,
    terevez,
    taxil,
    ari,
    murebbe
}