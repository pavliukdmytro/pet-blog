import React, {useContext} from 'react';
import './Header.scss';
import Menu from "../Menu/Menu.jsx";
import Auth from "../Auth/Auth.jsx";

function Header(props) {
    const logOut = () => {
        props.removeCurrentUser();
        localStorage.removeItem('user');
    };
    return(
        <header className="container">
            <Menu />
            {
                props.user && props.user.userName &&
                <span>{props.user.userName}</span>
            }
            {
                props.user && props.user.userName ?
                    <span
                        className="header-logout"
                        onClick={logOut}
                    >logout</span> : <Auth />
            }
        </header>
    )
}

export default Header;
