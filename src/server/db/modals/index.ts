export interface BooksT {
    title?: string;
    author?: string;
    price?: number;
    name?: string;
    id?: number;
    category_id?:number;
}

export interface CategoriesT{
    id?: number;
    name?: string;
}

export interface TUsers {
    id?: number;
    email?: string;
    password?: string;
    role?: string;
    _created?: Date;
    name?: string
}

export interface TTokens {
    id?: number;
    token?: string;
    _created?: Date;
    userid?: number;
}

export interface DBResp {
    affectedRows?: number;
    insertId?: number;
}