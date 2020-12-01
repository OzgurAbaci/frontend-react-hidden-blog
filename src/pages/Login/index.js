import React from 'react';
import {FormProvider, useForm} from "react-hook-form";
import {useAuthentication} from "../../hooks/authentication";
import {Redirect} from "react-router-dom";

function Login() {
    const methods = useForm();
    const {login, isAuthenticated} = useAuthentication();
    const fieldRef = methods.register;
    const onSubmit = (data) => {
        login(data.username, data.password)
    }
    return (
        <>
            <h1>Login</h1>
            <FormProvider {...methods}>
                <form id='loginform' onSubmit={methods.handleSubmit(onSubmit)}>
                    <label htmlFor='username'>Username</label> <input type="text" name='username' id='username' ref={methods.register()} />
                    <label htmlFor='password'>Password</label> <input type="password" name='password' id='password' ref={methods.register()}/>
                    <button type='submit'>Verzenden</button>
                </form>
            </FormProvider>
            {isAuthenticated && <Redirect to='/blog'/>}
        </>

    );
}

export {Login};