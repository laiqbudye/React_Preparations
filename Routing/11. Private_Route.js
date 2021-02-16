when we need to have restricted access to some part of our application & that part should visible to only logged in users, then in this case we need to use privateRoutes.

privateRoute is nothing but a function(that we create & not from react-router) where we chek for authentication of user, if it is authenticated then go ahead else redirect to login page.

implementation can be as follows:-

    
    
// simplified example
    
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../utils';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isLogin() ?                                 // Show the component only when the user is logged in
                <Component {...props} />
            : <Redirect to="/signin" />                   // Otherwise, redirect the user to /signin page
        )} />
    );
};

export default PrivateRoute;

--------------------------------------------------------------------------------------------------------------

//example from zenConnect
const PrivateRoute = ({
    component: Component,
    auth,
    ...rest
}) => (
        <Route
            {...rest}
            render={props => !auth.isAuthenticated && !auth.loading ?
                (<Redirect to={{ pathname: '/login', state: { path: props.match.url }}}/>) : (<Component {...props} />)} />
    )
    
    here we have renamed component as Component.
    we can call this as below:-
    
    <PrivateRoute exact path='/dashboard' component={Dashboard}></PrivateRoute>
    
    so when user hits xyz.com/dashboard then it will first go through privateRoute component & renders dashboard if that user is authenticated.
    
    
    use cases
    i have used this in zenconnect app.
