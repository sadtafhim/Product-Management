import React from 'react';
import { createBrowserRouter } from "react-router";
import PageLayout from '../layout/PageLayout/PageLayout';
import AuthLayout from '../layout/AuthLayout/AuthLayout';
import AllProducts from '../pages/AllProducts/AllProducts';
import AddProducts from '../pages/AddProducts/AddProducts';
import Login from '../pages/Auth/Login/Login';
import Register from '../pages/Auth/Register/Register';

const router = createBrowserRouter([
    {
        path: "/",
        element: <PageLayout></PageLayout>,
        children: [
            {
                path: "/AllProducts",
                element: <AllProducts></AllProducts>
            },
            {
                path: "/AddProducts",
                element: <AddProducts></AddProducts>
            }
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            { path: "/auth/login", element: <Login></Login> },
            { path: "/auth/register", element: <Register></Register> }
        ]
    },
]);

export default router;