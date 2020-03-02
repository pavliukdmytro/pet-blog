import React from 'react';

import './Header.scss';
import Menu from "../Menu/Menu.jsx";
import Auth from "../Auth/Auth.jsx";

function Header() {
    return(
        <header className="container">
            <Menu />
            <Auth />
        </header>
    )
}

export default Header;
