import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free';
import '@fortawesome/fontawesome-free/css/all.min.css';
import style from './Contact.module.css';
import {useEffect} from 'react';


export default function Contact() {
    useEffect(() => {
        document.title = 'Contact';
    }, []);
    return <>
        <section className='bg-white py-5 min-vh-100'>
            <div className="container">
                <div className="title pt-5">
                    <h2 className={`${style.textMain} text-center text-uppercase fw-bold display-5 pt-5`}>conatct section</h2>
                    <div className="lines-star pt-2 d-flex justify-content-center align-items-center">
                        <span className={`${style.line} ${style.bgMain} me-4`}></span>
                        <i className={`${style.textMain} fa-solid fa-star fs-5 me-4`}></i>
                        <span className={`${style.line} ${style.bgMain}`}></span>
                    </div>
                </div>
                <div className="mx-auto">
                    <div className="pt-5 d-flex justify-content-center align-items-center">
                    <input type="text" className={`${style.formControl} form-control border-0 border-bottom pb-3 fs-5`} id="nameFormControlInput1" placeholder="userName" />
                    </div>
                    <div className="pt-5 d-flex justify-content-center align-items-center">
                        <input type="number" className={`${style.formControl} form-control border-0 border-bottom pb-3 fs-5`} id="ageFormControlInput1" placeholder="userAge" />
                    </div>
                    <div className="pt-5 d-flex justify-content-center align-items-center">
                        <input type="email" className={`${style.formControl} form-control border-0 border-bottom pb-3 fs-5`} id="emailFormControlInput1" placeholder="userEmail" />
                    </div>
                    <div className="pt-5 d-flex justify-content-center align-items-center">
                        <input type="password" className={`${style.formControl} form-control border-0 border-bottom pb-3 fs-5`} id="passwordFormControlInput1" placeholder="userPassword"/>
                    </div>
                    <div className="pt-5">
                        <button className={`${style.btnMessage} text-white`}>Send Message</button>
                    </div>
                </div>

            </div>
        </section>


    </>
}
