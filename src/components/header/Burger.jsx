import React, { useState } from 'react';
import '../../style/burger.scss';
import { Link } from 'react-router-dom';


const Burger = () => {

    const [showMenu, setShowMenu] = useState(false);

    let menu

    if (showMenu) {
        menu = <div className='burger_menu'>
            <div className="burger_menu_wrapper">
                <div className="burger_menu_header">
                    <img className='burger_logo' src="/img/logo_burger.svg" alt="logo" />
                    <img className='burger_close' src="/icons/close_icon.svg" alt="close" onClick={() => setShowMenu(!showMenu)} />
                </div>
                <div className="burger_menu_link">
                    <Link to='/'>Головна</Link>
                    <Link to='/about-us'>Про нас</Link>
                    <Link to='/service'>Послуга</Link>
                    <Link to='/faq'>FAQ</Link>
                    <Link to='/contacts'>Контакти</Link>
                    <Link to='/profile'>Профіль</Link>
                </div>
                <div className="burger_menu_lang">
                    <div className="glob_lang">
                        <img src='/icons/icons_language.svg' alt="glob" />
                        <p>ENG</p>
                    </div>
                </div>
                <div className="burger_menu_mail">
                    <div className="footer_email">
                        <img src='./icons/icon_email-footer.svg' alt="email" />
                        <p>info@daiwo.ai</p>
                    </div>
                </div>
                <div className="burger_menu_wallet">
                    <button className='secondary'>Connect Wallet</button>
                </div>
            </div>
        </div>
    }

    return (

        <nav className='burger' >
            <img className='burger_menu_btn' src="/icons/burger_icon.svg" alt="burger" onClick={() => setShowMenu(!showMenu)} />
            {menu}
        </nav>

    );
};

export default Burger;
