import React from 'react';
import { Outlet } from 'react-router';
import NavBarSection from '../../components/NavBarSection/NavBarSection';
import FooterSection from '../../components/FooterSection/FooterSection';


const AuthLayout = () => {
    return (
        <div>
            <NavBarSection></NavBarSection>
            <Outlet></Outlet>
            <FooterSection></FooterSection>
        </div>
    );
};

export default AuthLayout;