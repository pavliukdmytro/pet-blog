import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';

import './Menu.scss';

function Menu() {
    const [menu, setMenu] = useState(null);
    useEffect(() => {
        const getMenu = async () => {
            try{
                const response = await fetch('/api/get/menu', {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data = await response.json();
                setMenu(data);
            } catch (err) {
                console.error(err);
            }
        };
        getMenu();
    }, []);

    return (
        <div className="menu">
            {
                menu &&
                    menu.map((link, i) => (
                        <NavLink
                            key={i}
                            to={link.href}
                            exact
                            activeClassName="menu__link-active"
                            className="menu__link"
                        >{link.name}</NavLink>
                    ))
            }
        </div>
    )
};

export default Menu;
