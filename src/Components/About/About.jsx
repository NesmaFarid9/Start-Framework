import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free';
import '@fortawesome/fontawesome-free/css/all.min.css';
import style from './About.module.css';
import {useEffect} from 'react';


export default function About() {
    useEffect(() => {
        // ComponentDidAmount
        document.title = 'About';
    }, []);
    return <>
        <section className={`${style.bgMain} py-5`}>
            <div className="container py-5 d-flex flex-column justify-content-center align-items-center">
                <div className="pt-5">
                    <h2 className="text-white pt-5 text-uppercase fw-bold display-5">about component</h2>
                </div>
                <div className="lines-star pt-3 d-flex justify-content-center align-items-center">
                        <span className={`${style.line} me-4`}></span>
                        <i className="fa-solid fa-star text-white fs-5 me-4"></i>
                        <span className={style.line}></span>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 gap-0">
                            <div className="inner">
                                <p className={`${style.fw400} ${style.fSystem} ${style.fP} text-white pt-5 text-center text-md-start`}>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="inner">
                                <p className={`${style.fw400} ${style.fSystem} ${style.fP} text-white pt-5 text-center text-md-start`}>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
        </section> 
    </>
}
