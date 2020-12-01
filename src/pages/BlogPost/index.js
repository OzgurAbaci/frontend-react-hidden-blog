import React from 'react';
import posts from '../../data/posts.json';
import {useParams, Redirect} from 'react-router-dom';
import {useAuthentication} from "../../hooks/authentication";


export function BlogPost() {
    const {id} = useParams();
    const {isAuthenticated} = useAuthentication();
    console.log(isAuthenticated)
    const post = posts.find((post) => post.id === id);
    if (post) {
        const {title, content, date} = post;
        const isprivate = post.private;

        if(isAuthenticated || !isprivate){
            return (
                <>  {console.log(posts)}
                    <h1>BlogPost {id}</h1>
                    <h2>{title}</h2>
                    <div>{content}</div>
                    <div>{date}</div>
                </>
            );
        } else{
            return (
                <Redirect to='/login'/>
            )
        }



    }
    return (
        <Redirect to='/blog'/>
    )


}