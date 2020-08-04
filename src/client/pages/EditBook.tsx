import * as React from 'react'
import { useHistory, useParams } from 'react-router';
import { ICatergories } from '../utils/interfaces';
import { useEffect, useState } from 'react';
import apiServices from '../utils/api-services';

const EditBook: React.FC<IEditBook> = () => {

    const history = useHistory();
    const { id } = useParams()
    const [newCategory, setNewCategory] = useState('0');
    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [price, setPrice] = useState<string>('')


    const [categories, setCategories] = useState<ICatergories[]>([]);
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

    useEffect(() => {
        (async () => {
            try {
                let res = await fetch(`/api/books/${id}`);
                let [book] = await res.json()
                setTitle(book.title)
                setAuthor(book.author)
                setPrice(book.price)
                setNewCategory(book.category_id)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [id]);

    const onUpdate = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        try {
            await apiServices(`/api/books/${id}`, 'PUT', { newCategory, title, author, price })
            history.push(`/${id}/details`)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <h1>Update Book</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form className="">
                            <div className="form-group ">
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
                                    onClick={onUpdate}
                                    className="btn btn-primary">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export interface IEditBook { }

export default EditBook;