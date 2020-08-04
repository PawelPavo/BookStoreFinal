import * as React from 'react'

const AddBook: React.FC<IAddBook> = () => {

    return (
        <>
            <div className="container">
                <div className="row justify-content-center my-5">
                    <h1 className="text-center text-monospace">Add Book</h1>
                </div>
            </div>
        </>
    )
}

export interface IAddBook { }

export default AddBook;
