import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Home} from "./Home";
import {Blog} from "./Blog";
import {Login} from "./Login";
import {BlogPost} from "./BlogPost";
import {RoutePrivate} from "../RoutePrivate";
import blogs from '../data/posts.json'

export function Routes() {
    return (
        <Switch>
            <Route path='/blog/:id'><BlogPost /></Route>
            <Route path='/blog'><Blog/></Route>
            <Route path='/login'><Login/></Route>
            <Route path='/'><Home/></Route>
        </Switch>
)
}
