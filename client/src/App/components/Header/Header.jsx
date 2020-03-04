import React, {useContext} from 'react';
import {AuthContext} from '../../../context/auth.context.js';
import './Header.scss';
import Menu from "../Menu/Menu.jsx";
import Auth from "../Auth/Auth.jsx";

function Header(props) {
    const auth = useContext(AuthContext);
    return(
        <header className="container">
            <Menu />
            {
                props.user && props.user.userName &&
                <span>{props.user.userName}</span>
            }
            <Auth />
        </header>
    )
}

export default Header;
