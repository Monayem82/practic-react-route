import React from 'react';
import Home from '../Home/Home';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <h2>Root file</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;