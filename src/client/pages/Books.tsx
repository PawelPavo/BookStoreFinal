import * as React from 'react'

const Books: React.FC<IBooks> = () => {

    return (
        <>
            <div className="container">
                <div className="row justify-content-center my-5">
                    <h1 className="text-center text-monospace">Books</h1>
                </div>
            </div>
        </>
    )
}

export interface IBooks { }

export default Books;