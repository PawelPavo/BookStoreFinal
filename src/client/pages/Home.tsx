import * as React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC<IHome> = () => {

    return (
        <>
            <div className="container">
                <div className="row justify-content-center my-5">
                    <h1 className="text-center">Welcome to the Bookstore</h1>
                </div>
                <div className="row justify-content-center">
                    <Link to='/books'>
                        <div className="btn btn-primary">All Books</div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export interface IHome { }

export default Home;