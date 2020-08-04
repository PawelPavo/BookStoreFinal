import * as React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { useState } from 'react'


const PrivateRoute: React.FC<PrivateRouteProps> = props => {
    const token = localStorage.getItem('token')
    const [auth, setAuth] = useState<boolean>(false)
    const [checking, setChecking] = useState<boolean>(true)

    if (checking) {
        return <h1>Loading...</h1>
    }

    if (auth) {
        return (
            <Route exact={props.exact} path={props.path}>
                {props.children}
            </Route>
        )
    } else {
        return <Redirect to={{ pathname: '/login', state: { msg: 'You must be logged in to see this page!' } }} />
    }
}


interface PrivateRouteProps {
    exact: boolean;
    path: string;
}

export default PrivateRoute;