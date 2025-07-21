import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free';
import '@fortawesome/fontawesome-free/css/all.min.css';
import imgHError from '../../assets/ErrorImg.jpg';

export default function NotFound() {
    return<>
        <div className="d-flex justify-content-center align-items-center vh-100 pt-5">
            <img src={imgHError} alt="Error" className='pt-5 w-75'/>
        </div>
    </>
}
