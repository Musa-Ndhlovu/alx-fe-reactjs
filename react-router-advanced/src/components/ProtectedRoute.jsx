import { Component } from 'react';
import {BrowserRouter as Router, Routes, Route, Redirect, Switch} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route
    {...rest}
        render = {props =>
            isAuthenticated() ? (
                <component {...props} />
            ) : (
                <Redirect to = "/Profile" />
            )  
        }
    />
);

const ProtectedRoute = () => {
    const handleProfile = () => {
      localStorage.setItem ("useAuth", "Navigate");
      window.location.href = '/profile';
    };

    return <button onClick = {handleSubmit}>Submit</button>;
}

export default ProtectedRoute;