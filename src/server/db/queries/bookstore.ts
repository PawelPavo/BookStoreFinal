import { Query } from '../index';
import { BooksT } from '../modals';

const all = () => Query<BooksT[]> ('select books.*, categories.name, categories.id as category_id from books join categories on categories.id = books.categoryid ORDER BY books._created DESC;')

const one = (id:string) => Query<BooksT[]> ('select books.*, categories.name, categories.id as category_id from books join categories on categories.id = books.categoryid WHERE books.id = ?', [id])

const insert = (title:string, author:string, price:number, categoryid:number) => Query('INSERT INTO books (categoryid, title, author, price) VALUES (?)', [[categoryid,title, author, price ]])

const update = (title:string, author:string, price:number, categoryid:number, id:string) => Query('UPDATE books SET categoryid = ?, title = ?, author = ?, price = ? WHERE id = ?', [categoryid, title, author, price, id])

const destroy = (id:string) => Query('DELETE FROM books WHERE id = ?', [id])
export default {
    all,
    one,
    destroy,
    insert,
    update
}