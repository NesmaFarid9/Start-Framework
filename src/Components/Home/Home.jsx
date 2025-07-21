import React from 'react';
import avatarImg from '../../assets/avataaars.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free';
import '@fortawesome/fontawesome-free/css/all.min.css';
import style from './Home.module.css';
import {useEffect} from 'react';

export default function Home() {
    useEffect(() => {
        document.title = 'Home';
    }, []);
    return<>
        <section id='home-sec' className={`${style.bgMain} py-5 gx-5`}>
            <div className="container py-2">
                <div className="main-home pt-5 d-flex flex-column justify-content-center align-items-center">
                    <img src={avatarImg} className='pt-5' alt="Avatar"/>         
                    <h2 className={`text-uppercase text-white pt-5 ${style.ltSpaceing} ${style.fSystem} ${style.fw700} display-5`}>start Framework</h2>
                    <div className="lines-star pt-3 d-flex justify-content-center align-items-center">
                        <span className={`${style.line} me-4`}></span>
                        <i className="fa-solid fa-star text-white fs-5 me-4"></i>
                        <span className={style.line}></span>
                    </div>
                    <p className={`pt-3 text-white ${style.fSystem} ${style.fw400} ${style.fP}`}>Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </div>
        </section> 
    </>
}

