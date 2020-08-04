import * as React from 'react'
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IBooks } from '../utils/interfaces';
import BookCard from '../components/Bookcard';
import apiServices from '../utils/api-services';

const Books: React.FC<IBooksProps> = () => {
    const history = useHistory();
    const [books, setBooks] = useState<IBooks[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const books = await apiServices('/api/books')
                setBooks(books);
            } catch (error) {
                console.log(error)
            }
        })()
    }, []);

    return (
        <>
            <div className="container">

                <div className="row justify-content-center">
                    <h1>Books</h1>
                </div>
                <div className="row">
                    {books.map(book => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            </div>
        </>
    )
}

export interface IBooksProps { }

export default Books;