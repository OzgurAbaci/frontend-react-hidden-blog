import React from 'react';
import posts from '../../data/posts.json'
import {NavLink, Link} from "react-router-dom";
import {useAuthentication} from "../../hooks/authentication";

const freePosts = posts.filter((post) => (!post.private))
export const Blog = () => {
    const {isAuthenticated} = useAuthentication();
    return (
        <>
            <h1>Blogposts {posts.length}</h1>
            {/*{posts.map((post, index) => <p key={index}><Link to={'/blog/' + (index + 1)} key={index}>Blog {index + 1}</Link>*/}
            {/*</p>)}*/}
            {posts.map((post, index) => {
                    if (!post.private || isAuthenticated) {
                        return (
                            <p key={index}>
                                <Link to={'/blog/' + (index + 1)} key={index}>Blog {index + 1}</Link>
                            </p>
                        );
                    }
                }
            )
            }
            {isAuthenticated ? <></> : <p><Link to='/login'>Log in</Link> om alle blogposts te zien.</p>}
        </>
    )
}