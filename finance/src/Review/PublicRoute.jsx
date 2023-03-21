import { Outlet, Navigate } from 'react-router-dom'
import React from 'react';
const PublicRoutes = () => {
    let auth = { 'token': !!localStorage.getItem('token') }
    return (

        auth.token ? <Navigate to="/dashboard" /> :
            <Outlet />
    )
}

export default PublicRoutes