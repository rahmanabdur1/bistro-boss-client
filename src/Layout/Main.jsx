import React from 'react';
import { Outlet, useLocation } from "react-router-dom"
import Footer from '../pages/Shared/Footer/Footer';
import Navber from '../pages/Shared/Navber/Navber';
const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div>
            {noHeaderFooter || <Navber></Navber>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;