import * as React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router';

const Register: React.FC<IRegister> = () => {
    const history = useHistory()
    const [values, setValues] = useState<{ [key: string]: string }>({})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        setValues((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
    }

    const handleRegister = async () => {
        const res = await fetch('/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        if (res.ok) {
            const info = await res.json();
            localStorage.setItem('token', info.token)
            localStorage.setItem('role', info.role)
            alert('Thanks for registering!')
            history.push('/books')
        }
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <h1 className="text-center">Register</h1>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                value={values.name || ''}
                                onChange={handleChange}
                                type="email"
                                name="name"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Email address</label>
                            <input
                                value={values.email || ''}
                                onChange={handleChange}
                                type="email"
                                name="email"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                value={values.password || ''}
                                onChange={handleChange}
                                type="password"
                                name="password"
                                className="form-control"
                            />
                        </div>
                        <div className="text-center">
                            <div
                                onClick={handleRegister}
                                className="btn btn-primary">Login</div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export interface IRegister { }

export default Register;