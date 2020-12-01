import React from 'react';
import {BrowserRouter as Router, NavLink, Link} from "react-router-dom";
import {useAuthentication} from "../hooks/authentication";


export function NavBar() {

    const {logout, isAuthenticated} = useAuthentication();
    return (
        <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            {!isAuthenticated && <NavLink to="/login">Login</NavLink>}
            {isAuthenticated && <NavLink to='/' onClick={logout}>Uitloggen</NavLink>}
        </>
    )
}