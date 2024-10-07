import React, { useState, useEffect, useContext } from "react";
import "../header/header.css";
import Dropdown from "../dropdown/drop.jsx";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

// import { LanguageContext } from "../context/Language.jsx";
function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const dropdownItems = [t('turkey'), t('egypt'), t('jordan'), t('hajj&umrah')];

    /* change the language*/
    const changeLanguage = (e) => {
        const l = localStorage.getItem('lang');
        localStorage.setItem("lang", e.target.value);

        if (e.target.value == 'ar') {
            i18n.changeLanguage('ar');
            console.log(e.target.value + "header")
            localStorage.setItem("lang", e.target.value);
        }

        else if (e.target.value == 'en') {
            localStorage.removeItem("lang");
            i18n.changeLanguage('en');
            console.log(i18n.language + "header")
            localStorage.setItem("lang", e.target.value);

        }
    }




    return (
        <>
            <header>
                <div className="container">
                    <div className="siteicon child">
                        <a href="">
                            <img src="logo.png" />
                        </a>
                    </div>
                    <div className={`child nav-menu ${isSidebarOpen ? 'open' : ''}`}>
                        <span className="close-btn" onClick={toggleSidebar}>&times;</span>
                        <ul>
                            <li><a href="#contact">{t('contact')}</a></li>
                            <li><Dropdown items={dropdownItems} /></li>
                            <li><a href="#why">{t('whyUs')}</a></li>
                            <li><a href="#slider">{t('homePage')}</a></li>
                            <li><NavLink to="../Login">{t('login')}</NavLink></li>
                            <li>
                            <div  className="language-select-container d-flex justify-content-center align-items-center">
                            <img src="./languageNew.svg" width={25}/>
                                    <select className="language-select" onChange={changeLanguage} value={localStorage.getItem('i18nextLng')} >
                                        {/* <option selected>{lang}</option> */}
                                        <option value={'ar'}>{t('arabic')}</option>
                                        <option value={'en'}>{t('english')}</option>
                                    </select>
                                </div></li>
                        </ul>

                    </div>

                    <div className="child menu-icon" onClick={toggleSidebar}>
                        <span>&#9776;</span>
                    </div>

                    {/* Only show overlay on mobile when sidebar is open */}
                    {isSidebarOpen && window.innerWidth <= 768 && (
                        <div className="overlay" onClick={toggleSidebar}></div>
                    )}


                </div>
            </header>

        </>
    )
}

export default Header;