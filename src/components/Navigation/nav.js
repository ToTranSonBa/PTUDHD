import React, { useEffect, useState } from 'react';
import './nav.scss';
import { NavLink, useLocation } from 'react-router-dom';
const Nav = (props) => {

    let location = useLocation();
    const [isShow, setIsShow] = useState(true);
    useEffect(() => {
        let session = sessionStorage.getItem("account");
        if (location.pathname === '/login') {
            setIsShow(false);
        }
    }, [])
    return (
        <>
            {isShow === true &&
                <div className="topnav">
                    <NavLink to="/" exact>Home</NavLink>
                    <NavLink to="/users">Users</NavLink>
                    <NavLink to="/projects">projects</NavLink>
                    <NavLink to="/about">About</NavLink>
                </div>
            }
        </>

    );
}

export default Nav;