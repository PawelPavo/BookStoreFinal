export interface IBooks {
    id?: number;
    title?: string;
    price?:number;
    name?: string;
    author?:string
    categoryid?: number
}

export interface ICatergories{
    id?: number,
    name?: string
}