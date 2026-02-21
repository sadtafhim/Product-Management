import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../../components/footer/footer';
import NavBar from '../../components/navbar/navbar';

const AuthLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default AuthLayout;