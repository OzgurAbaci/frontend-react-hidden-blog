import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useAuthentication} from "../hooks/authentication";

export function RoutePrivate({children, alt, ...rest}) {
    const {isAuthenticated} = useAuthentication();

    if (isAuthenticated) {
        return (
            <Route {...rest}>{children}</Route>
        )
    } else {
        if (alt) {
            return (<Route>{alt}</Route>);
        } else {
            return <Redirect to='/login'/>
        }
    }

}