import * as React from 'react'
import { useEffect, useState } from 'react';
import { IBooks } from '../utils/interfaces';
import { useParams, useHistory, Link } from 'react-router-dom';
import apiServices from '../utils/api-services';

const BookDetails: React.FC<IBookDetails> = () => {
    const history = useHistory()

    const { id } = useParams();
    const [book, setBook] = useState<IBooks>({
        id: 0,
        title: '',
        author: '',
        name: '',
        price: 0
    });

    useEffect(() => {
        (async () => {
            let bookid = id
            try {
                let res = await fetch(`/api/books/${bookid}`)
                let [book] = await res.json()
                setBook(book)
            } catch (error) {
                console.log({ error, msg: 'Unable to get book details.' })
            }
        })()
    }, [id]);

    const deleteBook = async (id: number) => {
        try {
            await apiServices(`/api/books/${id}`, 'DELETE')
            alert('Book Deleted!')
            history.push('/books')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <h1>Book Details</h1>
                </div>
                <h1 className="text-center">{book.title}</h1>
                <p className="text-center">Written by: {book.author}</p>
                <p className="text-center">Price: ${book.price}</p>
                <p className="text-center">{book.name}</p>
                <div className="row justify-content-center">
                    <button
                        onClick={() => deleteBook(id)}
                        className="btn btn-danger">
                        Delete</button>
                    <Link to={`/${id}/update`}>
                        <button className="btn btn-warning">Update</button>
                    </Link>
                </div>
            </div>

        </>
    )
}

export interface IBookDetails { }

export default BookDetails;