import * as React from 'react'

const Register: React.FC<IRegister> = () => {

    return (
        <>
            <div className="container">
                <div className="row justify-content-center my-5">
                    <h1 className="text-center text-monospace">Register</h1>
                </div>
            </div>
        </>
    )
}

export interface IRegister { }

export default Register;