import * as React from 'react'
import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const Login: React.FC<ILogin> = () => {
    const history = useHistory();
    const { state } = useLocation<{ msg: string }>()
    const [values, setValues] = useState<{ [key: string]: string }>({
        email: "Bookstore@bookstore.com",
        password: "password123"
    })

    const [error, setError] = useState<string>('')
    useEffect(() => {
        setError(state?.msg)

    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        setValues((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
    };

    const handleLogin = async () => {
        const res = await fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });
        if (res.ok) {
            const info = await res.json();
            localStorage.setItem('token', info.token)
            localStorage.setItem('role', info.role)
            history.push('/books')
        }
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <h1 className="text-center">Login</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form>
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
                            <div className="text-center mt-5">
                                <div
                                    onClick={handleLogin}
                                    className="btn btn-primary">Login</div>
                            </div>
                        </form>
                        {error && <div className="text-center text-danger">{error}</div>}
                    </div>
                </div>
            </div>
        </>
    )
}

export interface ILogin { }

export default Login;