import React, { useEffect, useState } from 'react';
import '../../style/wallet&lang.scss'

import { DAIWO } from '../web3/config';
import { ConnectKitButton } from 'connectkit';


import DAIWOLogo from './assets/icon_daiwo_coin.svg'

const WalletAndLang = () => {
    const [lang, setLang] = useState("ENG")
    const [isOpen, setIsOpen] = useState(false)

    const hendlerChangeLang = (value) => {
        setLang(value);
    };

    const addTokenToWallet = async () => {
        await window.ethereum.request({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20',
                options: {
                    address: DAIWO.address,
                    symbol: 'DAIWO',
                    decimals: 18,
                    image: DAIWOLogo,
                },
            },
        });
    }

    return (
        <div className="wallet_lang">
            <ConnectKitButton.Custom>
                {({ isConnected, isConnecting, show, hide, address, chain }) => {
                    return (
                        <button onClick={show} className='secondary'>
                            {isConnected ? address.slice(0, 6) + '...' + address.slice(38, 42) : "Connect Wallet"}
                        </button>
                    );
                }}
            </ConnectKitButton.Custom>
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

        </div >
    );
}

export default WalletAndLang;