import React from 'react';
import { NavLink } from 'react-router';

const Navbar = ({navItem}) => {
    return (
        <li>
            <NavLink to={`/`}>{navItem.name}</NavLink>
        </li>
    );
};

export default Navbar;