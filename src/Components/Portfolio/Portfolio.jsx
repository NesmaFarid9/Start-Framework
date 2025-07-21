import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free';
import '@fortawesome/fontawesome-free/css/all.min.css';
import imgHome from '../../assets/poert1.png';
import imgCake from '../../assets/port2.png';
import imgCamp from '../../assets/port3.png';
import style from './Portfolio.module.css';
import { useEffect } from 'react';



export default function Portfolio() {
    const [selectImage, setSelectImage] = useState('');

    function changeImage(img){
        setSelectImage(img);
    }
    useEffect(() => {
        document.title = 'Portfolio';
    }, []);
    return <>
        <section className="bg-white py-5 min-vh-100 position-relative">
            <div className="container">
                <div className="title pt-5">
                    <h2 className={`${style.textMain} text-center text-uppercase fw-bold display-5 pt-5`}>portfolio component</h2>
                    <div className="lines-star pt-2 d-flex justify-content-center align-items-center">
                        <span className={`${style.line} ${style.bgMain} me-4`}></span>
                        <i className={`${style.textMain} fa-solid fa-star fs-5 me-4`}></i>
                        <span className={`${style.line} ${style.bgMain}`}></span>
                    </div>
                </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4 col-12">
                            <div className="inner">
                                <div onClick={() => changeImage(imgHome)} className={`${style.innerCards} inner-cards py-5 position-relative ${style.cursorPointer}`}>
                                <img src={imgHome} className='w-100 rounded-3' alt="home"/>
                                <div className={`${style.bgOverlay} opacity-0 d-flex justify-content-center align-items-center rounded-3 position-absolute start-0 end-0 top-0 bottom-0 my-5 `}/>
                                    <i className={`${style.bgOverlay} fa-solid fa-plus opacity-0 z-2 fa-5x text-white position-absolute position-absolute start-50 top-50 end-50 bottom-50  d-flex justify-content-center align-items-center`}></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12">
                            <div className="inner">
                                <div onClick={() => changeImage(imgCake)} className={`${style.innerCards} inner-cards py-5 position-relative ${style.cursorPointer}`}>
                                <img src={imgCake} className='w-100 rounded-3' alt="cake"/>
                                <div className={`${style.bgOverlay} opacity-0 d-flex justify-content-center align-items-center rounded-3 position-absolute start-0 end-0 top-0 bottom-0 my-5 `}/>
                                    <i className={`${style.bgOverlay} fa-solid fa-plus opacity-0 z-2 fa-5x text-white position-absolute position-absolute start-50 top-50 end-50 bottom-50  d-flex justify-content-center align-items-center`}></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12">
                            <div className="inner">
                                <div onClick={() => changeImage(imgCamp)} className={`${style.innerCards} inner-cards py-5 position-relative ${style.cursorPointer}`}>
                                <img src={imgCamp} className='w-100 rounded-3' alt="camp"/>
                                <div className={`${style.bgOverlay} opacity-0 d-flex justify-content-center align-items-center rounded-3 position-absolute start-0 end-0 top-0 bottom-0 my-5 `}/>
                                    <i className={`${style.bgOverlay} fa-solid fa-plus opacity-0 z-2 fa-5x text-white position-absolute position-absolute start-50 top-50 end-50 bottom-50  d-flex justify-content-center align-items-center`}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4 col-12">
                            <div className="inner">
                                <div onClick={() => changeImage(imgHome)} className={`${style.innerCards} inner-cards py-5 position-relative ${style.cursorPointer}`}>
                                <img src={imgHome} className='w-100 rounded-3' alt="home"/>
                                <div className={`${style.bgOverlay} opacity-0 d-flex justify-content-center align-items-center rounded-3 position-absolute start-0 end-0 top-0 bottom-0 my-5 `}/>
                                    <i className={`${style.bgOverlay} fa-solid fa-plus opacity-0 z-2 fa-5x text-white position-absolute position-absolute start-50 top-50 end-50 bottom-50  d-flex justify-content-center align-items-center`}></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12">
                            <div className="inner">
                                <div onClick={() => changeImage(imgCake)} className={`${style.innerCards} inner-cards py-5 position-relative ${style.cursorPointer}`}>
                                <img src={imgCake} className='w-100 rounded-3' alt="cake"/>
                                <div className={`${style.bgOverlay} opacity-0 d-flex justify-content-center align-items-center rounded-3 position-absolute start-0 end-0 top-0 bottom-0 my-5 `}/>
                                    <i className={`${style.bgOverlay} fa-solid fa-plus opacity-0 z-2 fa-5x text-white position-absolute position-absolute start-50 top-50 end-50 bottom-50  d-flex justify-content-center align-items-center`}></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12">
                            <div className="inner">
                                <div onClick={() => changeImage(imgCamp)} className={`${style.innerCards} inner-cards py-5 position-relative ${style.cursorPointer}`}>
                                <img  src={imgCamp} className='w-100 rounded-3' alt="camp"/>
                                <div className={`${style.bgOverlay} opacity-0 d-flex justify-content-center align-items-center rounded-3 position-absolute start-0 end-0 top-0 bottom-0 my-5`}/>
                                    <i className={`${style.bgOverlay} fa-solid fa-plus opacity-0 z-2 fa-5x text-white position-absolute position-absolute start-50 top-50 end-50 bottom-50  d-flex justify-content-center align-items-center`}></i>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            {
                selectImage && <div className={`${style.cursorPointer} overlaySection d-flex justify-content-center align-items-center position-fixed top-0 bottom-0 start-0 end-0 bg-info bg-opacity-25 z-3 vh-100`} onClick={() => changeImage('')}>
                <img src={selectImage} alt="cake" className={`${style.chooseImage} rounded-3`}/>
                </div>
            }
            
        </section>
    </>
}
