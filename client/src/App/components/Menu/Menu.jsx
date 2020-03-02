import React from 'react';
import {NavLink} from 'react-router-dom';

function Menu() {
    return (
        <div className="container">
            <NavLink to="/" activeClassName="active">Home</NavLink>
            <NavLink to="/test" exact activeClassName="active">Test</NavLink>
        </div>
    )
}

export default Menu;
