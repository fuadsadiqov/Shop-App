export class Product{
    constructor(
        public id?: number,
        public name?: string,
        public price?: number,
        public imageUrl?: string,
        public description?: string,
        public category?: string,
        public categoryId?: string,
        public userId?: string | undefined,
        public content?: string | undefined,
        public title?: string | undefined,
        public address?: string | undefined
    ){}
}