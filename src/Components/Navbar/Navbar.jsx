import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import style from './Navbar.module.css';

import { Link, NavLink} from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        function scrollFunc(){
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', scrollFunc);
    },

    []);
    return <>
        <nav className={`${style.bgMain} fixed-top navbar navbar-expand-lg ${scrolled ? 'py-2' : 'py-3'}`}>
            <div className="container my-2">
                <Link className={`${style.editLogo, style.fSystem, style.fw700} navbar-brand text-uppercase text-white fs-1`} to='/'>Start Framework </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className={({isActive}) =>`${style.editLinks} ${style.fSystem} ${style.fw700} nav-link text-uppercase text-white me-4 fs-5 ${isActive ? style.activeLink: ''} `} aria-current="page" to='/about'>ABOUT </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive}) => `${style.editLinks} ${style.fSystem} ${style.fw700} nav-link text-uppercase text-white me-4 fs-5 ${isActive ? style.activeLink: ''} `} aria-current="page" to='/portfolio'>portfolio </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive}) => `${style.editLinks} ${style.fSystem} ${style.fw700} nav-link text-uppercase text-white me-4 fs-5 ${isActive ? style.activeLink: ''}`} aria-current="page" to='/contact'>contact </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}

