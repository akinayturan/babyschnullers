'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function NavOne() {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 70) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        const mobileMenu = () => {
            const mainNavToggler = document.querySelector(".menu-toggler");
            const mainNav = document.querySelector(".main-navigation");

            if (mainNavToggler && mainNav) {
                mainNavToggler.addEventListener("click", () => {
                    mainNav.style.display = mainNav.style.display !== "block" ? "block" : "none";
                });
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        mobileMenu(); // Call it after ensuring the elements exist in the DOM

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const searchButton = () => {
            const searchToggle = document.querySelector(".search-toggle");
            const searchPopup = document.querySelector(".search-popup");
            const searchClose = document.querySelector(".cancel");
            const searchOverlay = document.querySelector(".search-overlay");

            if (searchToggle && searchPopup && searchClose && searchOverlay) {
                searchToggle.addEventListener("click", () => {
                    searchPopup.classList.add('active');
                });

                searchClose.addEventListener("click", () => {
                    searchPopup.classList.remove('active');
                });

                searchOverlay.addEventListener("click", () => {
                    searchPopup.classList.remove('active');
                });
            }
        };

        searchButton(); // Call it after ensuring the elements exist in the DOM
    }, []);

    return (
        <header className="site-header site-header__header-one ">
            <nav className={`navbar navbar-expand-lg navbar-light header-navigation stricky `}>
                <div className="container clearfix">
                    <div className="logo-box clearfix">
                        <Link href="/" className="navbar-brand">
                            <h1>BABYSCHNULLERS
                            </h1>
                        </Link>

                        <button className="menu-toggler">
                            <span className="fas fa-bars"></span>
                        </button>
                    </div>
                    <div className="main-navigation">
                        <ul className=" navigation-box">

                            <li>
                                Emzikzincirleri & Schnullerketten
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="site-header__decor">
                <div className="site-header__decor-row">
                    <div className="site-header__decor-single">
                        <div className="site-header__decor-inner-1"></div>
                    </div>
                    <div className="site-header__decor-single">
                        <div className="site-header__decor-inner-2"></div>
                    </div>
                    <div className="site-header__decor-single">
                        <div className="site-header__decor-inner-3"></div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default NavOne;
