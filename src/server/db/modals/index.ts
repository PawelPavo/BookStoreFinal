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