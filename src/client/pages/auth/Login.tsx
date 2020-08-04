import * as React from 'react'

const Login: React.FC<ILogin> = () => {

    return (
        <>
            <div className="container">
                <div className="row justify-content-center my-5">
                    <h1 className="text-center text-monospace">Login</h1>
                </div>
            </div>
        </>
    )
}

export interface ILogin { }

export default Login;