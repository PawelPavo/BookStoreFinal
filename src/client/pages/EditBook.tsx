import * as React from 'react'

const EditBook: React.FC<IEditBook> = () => {

    return (
        <>
            <div className="container">
                <div className="row justify-content-center my-5">
                    <h1 className="text-center text-monospace">Update Book</h1>
                </div>
            </div>
        </>
    )
}

export interface IEditBook { }

export default EditBook;