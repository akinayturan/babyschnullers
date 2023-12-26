"use client";

import React from 'react';

export default function Footer() {

    const scrollTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div>
            <footer className="site-footer">
                <div className="site-footer__upper">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-6 col-sm-12">
                                <div className="footer-widget footer-widget__contact">
                                    <ul className="list-unstyled footer-widget__course-list">
                                        <li>
                                            <h2>Hakkımda</h2>
                                            <p>Emzikzincirleri & Schnullerketten

                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-1 col-lg-1 col-sm-12">
                                <div className="footer-widget footer-widget__contact">
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-sm-12">
                                <div className="footer-widget footer-widget__about">
                                    <h2 className="footer-widget__title">ADRES</h2>
                                    <p className="footer-widget__text">
                                        Almanya merkezli yapıyoruz ama iletişime geçip konuşabiliriz 🙂
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-footer__bottom">
                    <div className="container">
                        <p className="site-footer__copy">&copy; Copyright 2023 by <a target="_blank" href="https://sub.fyi/">Sub.fyi</a></p>
                        <div className="site-footer__social">
                            <div onClick={scrollTop} className="scroll-to-target site-footer__scroll-top"><i
                                className="fas fa-arrow-up"></i></div>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="search-popup">
                <div className="search-popup__overlay custom-cursor__overlay search-overlay"></div>
                <div className="search-popup__inner">
                    <form action="#" className="search-popup__form">
                        <input type="text" name="search" placeholder="Type here to Search...."/>
                        <button type="submit"><i className="kipso-icon-magnifying-glass"></i></button>
                        <div className="cancel"><i className="fas fa-times-circle"></i></div>
                    </form>
                </div>
            </div>
        </div>
    );
}

