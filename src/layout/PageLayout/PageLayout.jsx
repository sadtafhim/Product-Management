import React from 'react';
import { Outlet } from 'react-router';
import NavBarSection from '../../components/NavBarSection/NavBarSection';
import FooterSection from '../../components/FooterSection/FooterSection';
const PageLayout = () => {
    return (
        <div>
            <NavBarSection></NavBarSection>
            <Outlet></Outlet>
            <FooterSection></FooterSection>
        </div>
    );
};

export default PageLayout;