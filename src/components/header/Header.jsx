import React, { useState } from 'react';
import '../../style/header.scss'
import '../../style/burger.scss';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import WalletAndLang from './WalletAndLang';
import Burger from './Burger';
import { useEffect } from 'react';

import { ConnectKitButton } from 'connectkit';

const Header = () => {

    const [menyBlock, setMenuBlock] = useState('')
    const [lang, setLang] = useState("ENG")
    const [isOpen, setIsOpen] = useState(false)

    const hendlerChangeLang = (value) => {
        setLang(value);
    };

    return (
        <header className='header'>
            <div className="container">
                <div className="header_row">
                    <Logo />
                    <div className='links'>
                        <Link to='/'>Homepage</Link>
                        <Link to='/about-us'>About</Link>
                        <Link to='/service'>Service</Link>
                        <Link to='/faq'>FAQ</Link>
                        <Link to='/contacts'>Contact</Link>
                        <Link to='/profile'>Profile</Link>
                    </div>
                    <WalletAndLang />
                    <nav className='burger' >
                        <img className='burger_menu_btn' src="/icons/burger_icon.svg" alt="burger" onClick={() => setMenuBlock('add_display')} />
                    </nav>
                </div>
                <div className={`burger_menu  ${menyBlock}`}>
                    {/* <div className="burger_menu_wrapper"> */}
                    <div className="burger_menu_header">
                        <img className='burger_logo' src="/img/logo_burger.svg" alt="logo" />
                        <img className='burger_close' src="/icons/close_icon.svg" alt="close" onClick={() => setMenuBlock(' ')} />
                    </div>
                    <div className="burger_menu_link">
                        <Link
                            onClick={() => setMenuBlock(' ')}
                            to='/'
                        >Homepage</Link>
                        <Link
                            onClick={() => setMenuBlock(' ')}
                            to='/about-us'
                        >About</Link>
                        <Link onClick={() => setMenuBlock(' ')}
                            to='/service'>Service</Link>
                        <Link onClick={() => setMenuBlock(' ')}
                            to='/faq'>FAQ</Link>
                        <Link onClick={() => setMenuBlock(' ')}
                            to='/contacts'>Contact</Link>
                        <Link onClick={() => setMenuBlock(' ')}
                            to='/profile'>Profile</Link>
                    </div>
                    <div className="burger_menu_lang">
                        <div
                            onClick={() => setIsOpen(!isOpen)}
                            className="glob_lang">
                            <img src='/icons/icons_language.svg' alt="glob" />
                            <p className='lang_select'>{lang} <img className="" src="/icons/icon_arrow-purple.svg" alt="icon"></img></p>
                            {isOpen &&
                                <div className='lang_option'>
                                    <p onClick={(e) => hendlerChangeLang('ENG')}>ENG</p>
                                    <p onClick={(e) => hendlerChangeLang('УКР')}>УКР</p>
                                    <p onClick={(e) => hendlerChangeLang('РУС')}>РУС</p>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="burger_menu_mail">
                        <div className="footer_email">
                            <img src='./icons/icon_email-footer.svg' alt="email" />
                            <p>info@daiwo.ai</p>
                        </div>
                    </div>
                    <div className="burger_menu_wallet">
                        <ConnectKitButton.Custom>
                            {({ isConnected, isConnecting, show, hide, address, chain }) => {
                                return (
                                    <button onClick={show} className='secondary'>
                                        {isConnected ? address.slice(0, 6) + '...' + address.slice(38, 42) : "Connect Wallet"}
                                    </button>
                                );
                            }}
                        </ConnectKitButton.Custom>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </header>
    );
};

export default Header; 