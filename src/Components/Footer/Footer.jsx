import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free';
import '@fortawesome/fontawesome-free/css/all.min.css';
import style from './Footer.module.css'

export default function Footer() {
  return <>
    <footer className={`${style.bgMain}`}>
      <div className="container py-5">
        <div className="row py-5">
          <div className="col-lg-4 pb-md-0 pb-5">
            <div className="footer-info text-center ">
              <h3 className='text-white text-uppercase fs-2'>LOCATION</h3>
              <p className='text-white'>2215 John Daniel Drive</p>
              <p className='text-white text-uppercase'>Clark, MO 65243</p>
            </div>
          </div>
          <div className="col-lg-4 pb-md-0 pb-5">
            <div className="footer-info text-center">
              <h3 className='text-white text-uppercase fs-2'>AROUND THE WEB</h3>
              <div className={`${style.socialIcons} d-flex justify-content-center align-items-center`}>
                <div className={`${style.circle} rounded-5 rounded d-flex justify-content-center align-items-center me-3`}>
                  <i className="fa-brands fa-facebook text-white"></i>
                </div>
                <div className={`${style.circle} ${style.circle2} rounded-5 rounded d-flex justify-content-center align-items-center me-3`}>
                  <i className="fa-brands fa-twitter text-white"></i>
                </div>
                <div className={`${style.circle} ${style.circle3} rounded-5 rounded d-flex justify-content-center align-items-center me-3`}>
                  <i className="fa-brands fa-linkedin-in text-white"></i>
                </div>
                <div className={`${style.circle} ${style.circle4} rounded-5 rounded d-flex justify-content-center align-items-center me-3`}>
                  <i className="fa-solid fa-globe text-white"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 pb-md-0 pb-5">
            <div className="footer-info text-center">
              <h3 className='text-white text-uppercase fs-2'>ABOUT FREELANCER</h3>
              <p className='text-white'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.bottomFooter} py-3`}>
        <div className="text-center d-flex justify-content-center align-items-center">
          <p className='text-white pt-2 fs-5 '>Copyright © Your Website 2021</p>
        </div>
      </div>
    </footer>
  </>
}
