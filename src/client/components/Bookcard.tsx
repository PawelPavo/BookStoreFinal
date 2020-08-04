import * as React from 'react';
import { IBooks } from '../utils/interfaces';
import { Link } from 'react-router-dom';

const BookCard: React.FC<IBookCardProps> = props => {

    return (
        <>
            <div className="col-md-6 my-2">
                <div className="card text-center">
                    <div>{props.book.name}</div>
                    <div className="card-body">
                        <h5 className="card-title">{props.book.title}</h5>
                        <p className="card-text">Written by: {props.book.author}</p>
                        <Link to={`/${props.book.id}/details`}>
                            <button className="btn btn-primary">More Details</button>
                        </Link>
                    </div>
                    <div>
                        Price: ${props.book.price}
                    </div>
                </div>
            </div>
        </>
    );
};

interface IBookCardProps {
    book: IBooks;
}

export default BookCard;