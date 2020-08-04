import * as React from 'react'

const BookDetails: React.FC<IBookDetails> = () => {

    return (
        <>
            <div className="container">
                <div className="row justify-content-center my-5">
                    <h1 className="text-center text-monospace">Book Details</h1>
                </div>
            </div>
        </>
    )
}

export interface IBookDetails { }

export default BookDetails;