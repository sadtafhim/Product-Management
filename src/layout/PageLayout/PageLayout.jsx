import React from 'react';
import NavBar from '../../components/navbar/navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/footer/footer';
const PageLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default PageLayout;