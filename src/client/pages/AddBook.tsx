import * as React from 'react';
import { useEffect, useState } from 'react';
import { ICatergories } from '../utils/interfaces';
import { useHistory } from 'react-router-dom';
import apiServices, { setStorage } from '../utils/api-services'


const AddBook: React.FC<IAddBook> = () => {

    const history = useHistory();
    const [newCategory, setNewCategory] = useState('0');
    const [categories, setCategories] = useState<ICatergories[]>([]);
    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [price, setPrice] = useState<string>('')

    useEffect(() => {
        (async () => {
            try {
                let res = await fetch('/api/categories');
                let categories = await res.json()
                setCategories(categories)
            } catch (error) {
                console.log(error)
            }
        })()
    }, []);

    const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        try {
            await apiServices('/api/books', 'POST', { newCategory, title, author, price})
            history.push('/books');
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <h1>Add Book</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form className="">
                            <div className="form-group">
                                <select className="form-control"
                                    value={newCategory}
                                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setNewCategory(e.target.value)}>
                                    <option value="0" disabled>Choose a Category ...</option>
                                    {categories.map(category => (
                                        <option key={category.id} value={category.id}>{category.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group">
                                <input
                                    value={title}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                                    placeholder="Title ..."
                                    type="text"
                                    className="form-control" />
                            </div>
                            <div className="form-group">
                                <input
                                    value={author}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAuthor(e.target.value)}
                                    placeholder="Author ..."
                                    type="text"
                                    className="form-control" />
                            </div>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">$</span>
                                </div>
                                <input
                                    value={price}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrice(e.target.value)}
                                    placeholder="0 . 00"
                                    type="text"
                                    className="form-control" />
                            </div>
                            <div className="text-center">
                                <button
                                    onClick={onSubmit}
                                    className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export interface IAddBook { }

export default AddBook;
