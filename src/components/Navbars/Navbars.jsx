import React, { use } from 'react';
import Navbar from '../Navbar/Navbar';
import { NavLink } from 'react-router';

const Navbars = ({ navbarsData }) => {
    // const navbars=use(navbarsData)
    // console.log(navbars)
    return (
        <div className='my-4'>
            <ul className='flex justify-evenly'>
                <NavLink to={`/`}>Nav Bar</NavLink>
                <NavLink to="/">
                    {({ isPending }) => (
                        <span>Home {isPending && <span>loading data</span>}</span>
                    )}
                </NavLink>
                <NavLink to={`/about`}>About</NavLink>
                <NavLink to={`/services`}>Services</NavLink>
                {/* {
                    navbars.map(navItem=><Navbar key={navItem.id} navItem={navItem}></Navbar>)
                } */}
                <NavLink to={`/sing-in`}>Sing-in</NavLink>
            </ul>
        </div>
    );
};

export default Navbars;